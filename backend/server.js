// server.js

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

/ Serve frontend static files
app.use(express.static(path.join(__dirname, 'frontend')));

// Serve index.html for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

//Middleware

app.use(cors());
app.use(express.json());

let events = [
  { id: 1, name: "Tech Conference", date: "2025-07-10", location: "IIT PATNA" },
  { id: 2, name: "Hackathons", date: "2025-08-15", location: "SPNREC ARARIA" },
];

// GET all events
app.get('/api/events', (req, res) => {
  res.json(events);
});

// GET one event by id
app.get('/api/events/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const event = events.find(e => e.id === id);
  if (!event) return res.status(404).json({ message: "Event not found" });
  res.json(event);
});

// CREATE new event
app.post('/api/events', (req, res) => {
  const { name, date, location } = req.body;
  if (!name || !date || !location) {
    return res.status(400).json({ message: "Missing fields" });
  }
  const newEvent = {
    id: events.length ? events[events.length - 1].id + 1 : 1,
    name,
    date,
    location
  };
  events.push(newEvent);
  res.status(201).json(newEvent);
});

// UPDATE event
app.put('/api/events/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = events.findIndex(e => e.id === id);
  if (index === -1) return res.status(404).json({ message: "Event not found" });
  
  const { name, date, location } = req.body;
  if (!name || !date || !location) {
    return res.status(400).json({ message: "Missing fields" });
  }
  
  events[index] = { id, name, date, location };
  res.json(events[index]);
});

// DELETE event
app.delete('/api/events/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = events.findIndex(e => e.id === id);
  if (index === -1) return res.status(404).json({ message: "Event not found" });
  
  events.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
