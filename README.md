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

The platform focuses on **authentic conversation practice**, low-latency communication, and a **secure, scalable architecture**, enabling seamless real-time interactions across devices.

---

## ✨ Key Features

- 🔐 **Secure Authentication**
  - JWT-based authentication using **HTTP-only cookies**
  - Access & identity verification on every protected request
  - Role-based access control for secure communication

- 💬 **Real-Time Messaging**
  - One-to-one and group conversations
  - Typing indicators, read receipts, and online presence
  - Message reactions and persistent chat history

- 📹 **Video Calling**
  - Real-time video calls optimized for conversational learning
  - Low-latency peer-to-peer communication

- 🧑‍🤝‍🧑 **User Profiles**
  - Persistent user profiles with avatars
  - Seamless conversation continuity across multiple devices

- 🌐 **Community-Oriented Design**
  - Direct interaction with native speakers
  - Designed to simulate real-world language immersion

---

## 🔐 Authentication Flow (JWT-Based)

<details>
<summary><b>Click to expand</b></summary>

1. **User Signup / Login**
   - User submits credentials via the React frontend
   - Backend validates input and authenticates the user

2. **JWT Issuance**
   - Backend generates a signed JWT containing the user ID
   - JWT is stored in an **HTTP-only, secure cookie**

3. **Protected Requests**
   - On each API request, the cookie is automatically sent
   - Backend middleware verifies the JWT signature and expiry

4. **Authorization**
   - Verified user information is attached to `req.user`
   - Protected routes allow access based on authentication & role

5. **Session Persistence**
   - User remains authenticated across page refreshes
   - Logout clears the authentication cookie

</details>

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
Client (React + TanStack Query)
   │
   ├── HTTPS REST APIs (Auth, Users, Friends)
   │       └── JWT via HTTP-only Cookies
   │
   ├── WebSocket Connections
   │       └── Stream API (Chat, Presence, Reactions)
   │
Backend (Node.js + Express)
   │
   ├── Auth Middleware (JWT Verification)
   │
   ├── Controllers & Services
   │       ├── User & Profile Management
   │       └── Stream User Synchronization
   │
   ├── MongoDB (Persistent Data)
   │       ├── Users
   │       ├── Profiles
   │       └── Metadata
   │
   └── Stream API
           ├── Real-Time Messaging
           ├── Typing Indicators
           └── Presence Tracking
