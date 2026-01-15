<h1 align="center">🚀 Xstream</h1>

<p align="center">
  <b>A Real-Time Language Exchange Platform</b><br/>
  Connect with native speakers through real-time chat and video calls
</p>

<p align="center">
  <img src="https://img.shields.io/badge/MERN-Stack-blue" />
  <img src="https://img.shields.io/badge/Stream-API-purple" />
  <img src="https://img.shields.io/badge/Real--Time-Chat-green" />
  <img src="https://img.shields.io/badge/Video-Calling-orange" />
  <img src="https://img.shields.io/badge/JWT-Authentication-red" />
</p>

---

## 🌍 About the Project

**Xstream** is a full-stack **real-time messaging and video calling platform** designed to help users learn new languages by communicating directly with **native speakers**.

The platform emphasizes **authentic conversation practice**, low-latency communication, and a **community-driven experience**, making language learning more natural and engaging.

---

## ✨ Key Features

- 🔐 **Secure Authentication**
  - JWT-based authentication using HTTP-only cookies
  - Protected routes and role-based access control

- 💬 **Real-Time Messaging**
  - One-to-one and group conversations
  - Typing indicators & online presence
  - Message reactions
  - Persistent chat history

- 📹 **Video Calling**
  - Real-time video calls for language practice
  - Optimized for conversational learning

- 🧑‍🤝‍🧑 **User Profiles**
  - Persistent profiles with avatars
  - Conversation continuity across devices

- 🌐 **Community-Oriented Design**
  - Learn directly from native speakers
  - Encourage real-world conversation practice

---

## 🛠 Tech Stack

| Layer | Technologies |
|------|-------------|
| Frontend | React.js, Context API, TanStack Query |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Real-Time | Stream API |
| Styling | Tailwind CSS |
| Authentication | JWT, HTTP-only Cookies |

---

## 🏗 Architecture Overview

```text
Client (React)
   │
   ├── REST APIs
   │
Backend (Node + Express)
   │
   ├── MongoDB (Users, Profiles, Metadata)
   │
   └── Stream API (Chat, Presence, Reactions)
