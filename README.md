# 📅 EventManagementSystem

> **API Integration and Front-End Interaction**

A full-stack web application built to demonstrate server-client communication via RESTful API. This system allows users to  manage a list of events with full CRUD operations. The application uses **Node.js, Server.js/Express** on the backend and **HTML,CSS(with Bootstrap)** on the frontend.

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
| Frontend        | HTML, CSS, Bootstrap 5    |
| Backend         | Node.js, Express.js/Server.js                   |
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

---

## 🤝 Contribution Guide
Want to suggest a new feature or fix a bug?
 1. Fork the repo on GitHub:
 Visit: **https://github.com/PJCODEX/EventManagementSystem.git** and click the "Fork" button (top-right)

 2. Clone your fork
**git clone https://github.com/your-username/EventManagementSystem.git** <br> 
cd EventManagementSystem</br>

 3. Create a new feature or bugfix branch
**git checkout -b feature/your-feature-name**
 4. Make your changes
(Open and edit files as needed using your code editor)

 5. Stage and commit your changes
**git add .
git commit -m "Add: Your short and meaningful description"**

 6. Push your changes to your fork
**git push origin feature/your-feature-name**

 7. Open a Pull Request
 - Go to your forked repo on GitHub
 - Click "Compare & pull request"
 - Add a clear title and description 
 - Submit the PR to the original repo (PJCODEX/EventManagementSystem)
