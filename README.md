# 📅 Event Management System

> **API Integration and Front-End Interaction**

A full-stack web application built to demonstrate server-client communication via RESTful API. This system allows users to register/login and manage a list of events with full CRUD operations. The application uses **Node.js, Server.js/Express** on the backend and **HTML,CSS(with Bootstrap)** on the frontend.

---

## 🎯 Task Objective

**Task 5: API Integration and Front-End Interaction**

- ✅ Create RESTful API endpoints on the server for handling CRUD operations.
- ✅ Develop a front-end interface that interacts with the server API.
- ✅ Fetch and display data dynamically from the API on the frontend.
- ✅ Enable user authentication.

---  
**🌍 Render Link** : 🔗 https://eventmanagementsystem-d3z4.onrender.com/

---

## 🛠️ Tech Stack & Tools Used

| Category        | Tools & Frameworks                    |
|---------------  |---------------------------------------|
| Frontend        | HTML, CSS, JavaScript, Bootstrap 5    |
| Backend         | Node.js, Express.js                   |
| API Style       | RESTful API (JSON based)              |     
| Version Control | Git & GitHub                          |
| Optional        | Google Fonts, Icons, Responsiveness   |

---

## 📁 Project Folder Structure

EventManagementSystem/
├── backend/
│ ├── server.js # Express server + REST API + static frontend handler
│ ├── package.json # Node dependencies (express, cors)
│ └── frontend/ # Frontend UI served statically
│ ├── index.html
│ ├── styles.css
│ └── (JS in script tags inside index.html)


yaml
Copy
Edit

---

## 🧠 Key Features

- 🔐 User authentication (register & login)
- 📅 Add, edit, delete, and view events(CRUD Operation)
- 🌐 REST API endpoints
- 🎨 Clean UI with Bootstrap 5
- 🌓 Dark mode toggle
- 🚀 Hosted on Render

---

## 🔍 Common Errors & Debugged Issues

| Issue | Fix |
|-------|-----|
| ❌ `Cannot GET /` | Ensured correct `express.static()` path and added `res.sendFile()` for `index.html`. |
| ❌ `path is not defined` | Added `const path = require('path')` at the top. |
| ❌ Folder not serving static files | Moved `frontend/` inside `backend/` to be accessible via Express. |

---

## 🚀 How to Run Locally

### 1. Clone this Repository

```bash
git clone https://github.com/PJCODEX/EventManagementSystem.git
cd EventManagementSystem/backend
2. Install Dependencies
bash
Copy
Edit
npm install
3. Start the Server
bash
Copy
Edit
node server.js
The app will be running on: http://localhost:3000


✨ How to Contribute or ⭐ Star
If you found this project helpful, feel free to:

⭐ Star this repo on GitHub

🛠 Fork and create your own version

📬 Submit pull requests with improvements
