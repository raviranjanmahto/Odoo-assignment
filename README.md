# 🔁 Skill Swap Platform

A full-stack MERN (MongoDB, Express, React, Node.js) web application that allows users to offer and request skill exchanges. Users can list their skills, browse others, and send swap requests with availability, feedback, and more — all powered by modern tools like **Redux Toolkit Query** and **Tailwind CSS**.

---

## 👤 Developed By

**Raviranjan Shivnarayan Mahto**  
📧 rvrnjnmahto@gmail.com

---

## 📌 Features

### 👤 User Features

- Register/Login with JWT authentication (cookie-based for secure sessions)
- Update profile (name, location, availability, skills offered/wanted)
- Make profile public/private
- Browse other users by skills
- View detailed user profiles
- Send swap requests with:
  - One of your offered skills
  - One of their wanted skills
  - A custom message

### 🔁 Swap System

- Send/accept/reject/cancel swap requests
- View pending/accepted swaps
- Rate after a completed swap

### 🛡️ Admin Features (Planned)

- Moderate skills
- Ban users
- Broadcast messages
- View reports

---

## 🚀 Tech Stack

### 🧠 Frontend

- **React** (with Vite for fast bundling)
- **Redux Toolkit** + **RTK Query** for:
  - Global state (auth, profile)
  - API calls with auto-caching & revalidation
- **Tailwind CSS** for responsive, mobile-first UI
- **React Router v6** for routing
- **React Toastify** for user notifications

### 🔧 Backend

- **Node.js + Express**
- **MongoDB + Mongoose**
- **JWT + Cookies** for secure auth
- **Cloudinary** for image uploads
- **Multer** for file handling

---

## 📦 Folder Structure

```bash
📁 client/
├── src/
│   ├── app/            # Redux store
│   ├── features/       # RTK slices + API logic
│   ├── pages/          # Main screens (Login, Dashboard, Profile, etc.)
│   ├── components/     # Reusable UI (Header, Card, etc.)
│   ├── routes/         # React Router config
│   └── main.jsx        # App entry
```

```bash
📁 server/
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── config/
└── index.js # Server entry point
```

🛠️ How to Run Locally
🔽 Clone the project

```bash
git clone https://github.com/your-username/skill-swap-platform.git
cd skill-swap-platform
```

```bash
cd server
npm install
```

🔑 Environment Variables (.env)
Create a .env file in /server with:

```bash
PORT=7027
NODE_ENV=development
MONGO_URI=mongodb://127.0.0.1:27017/skillswap
JWT_SECRET=supersecretjwtkey123
JWT_EXPIRE=7d
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

```

Start the server:

```bash

npm run dev
```

🎨 Frontend Setup

```bash
cd client
npm install
npm run dev
Your app runs at: http://localhost:5173
```

📩 Contact
If you have suggestions or need help:

📧 Email: rvrnjnmahto@gmail.com
