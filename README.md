# 💬 ChatWave - Real-Time Chat Application

Welcome to **ChatWave**, a full-stack real-time chat application built using the **MERN stack** (MongoDB, Express.js, React, Node.js) and **Socket.IO**. This project was developed as part of my full stack internship task (PRODIGY_FS_4) to demonstrate real-time communication using modern web technologies.

🚀 **Live Demo:** *Coming Soon*  
🔗 **GitHub Repository:** [ChatWave Repo](https://github.com/Bandaluppi-Suryacharan/PRODIGY_FS_4)

---

## 📌 Features

- 🔒 **User Authentication** – Sign up & login securely using JWT
- 💬 **Real-Time Messaging** – Instant 1-to-1 chat using Socket.IO
- 🧑‍🤝‍🧑 **Active Users** – See who's online in real time
- ✨ **Modern UI** – TailwindCSS + DaisyUI styled components
- 🍃 **MongoDB Integration** – Persistent storage of user data and messages
- ⚙️ **Responsive** – Mobile-friendly and responsive layout
- 🔥 **Toasts & Notifications** – Instant feedback using React Hot Toast

---

## ⚙️ Tech Stack

### 🧠 Frontend
- React 19
- Vite
- React Router DOM
- TailwindCSS & DaisyUI
- Zustand (state management)
- Lucide Icons
- Socket.IO Client
- Axios
- React Hot Toast

### 🛠️ Backend
- Node.js (ESM)
- Express.js
- MongoDB & Mongoose
- JWT Authentication
- BcryptJS (Password hashing)
- Socket.IO
- Cloudinary (for future media support)
- CORS, Cookie-Parser, Dotenv

---


## 🔐 Authentication Flow

1. 🔐 **Register/Login** – User registers or logs in using JWT
2. 🧠 **Session Handling** – Tokens are securely stored via cookies
3. 🔌 **Socket Connection** – User is connected to the Socket.IO server
4. 💬 **Real-Time Chat** – Messages are sent and received in real time
5. 🚪 **Logout** – User session ends, and socket disconnects

---

## 🧪 Getting Started Locally

###Backend Setup
cd backend
npm install
npm run dev
Create a .env file inside /backend and add:
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

---
###Frontend Setup
cd ../frontend
npm install
npm run dev
