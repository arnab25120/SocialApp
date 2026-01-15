🚀 Xstream – Real-Time Language Exchange Platform

Xstream is a full-stack real-time messaging and video calling platform built using the MERN stack and Stream API, designed to help users learn new languages by communicating directly with native speakers.
The platform focuses on authentic conversation practice, low-latency communication, and a community-driven user experience.

✨ Key Features

🔐 Secure Authentication

JWT-based authentication with HTTP-only cookies

Protected routes and role-based access control

💬 Real-Time Messaging

One-to-one and group conversations

Typing indicators & read receipts

Message reactions

Online/offline presence status

📹 Video Calling

High-quality real-time video calls

Designed for conversational language practice

🌍 Language Learning Focus

Connect with native speakers

Practice real-world conversations

Community-oriented interaction model

🧑‍🤝‍🧑 User Profiles

Persistent profiles with avatars

Conversation history across devices

🛠️ Tech Stack
Frontend

React.js

React Context API – global state management

TanStack Query (React Query) – server-state caching, background refetching & optimistic UI updates

Tailwind CSS – responsive and modern UI

Backend

Node.js

Express.js

MongoDB + Mongoose

Real-Time Services

Stream API

Real-time chat

Presence tracking

Typing indicators

Message reactions

Authentication & Security

JWT (JSON Web Tokens)

HTTP-only cookies

Role-based permissions

Secure protected API routes

🧩 System Architecture (High-Level)
Frontend (React)
   ↓  REST + WebSocket
Backend (Express + Node)
   ↓
MongoDB (User & Conversation Data)
   ↓
Stream API (Real-Time Messaging & Presence)


Stream API handles real-time communication

MongoDB stores persistent user and profile data

JWT cookies ensure secure authentication across sessions

🔐 Authentication Flow

User signs up / logs in

Backend issues a JWT stored in an HTTP-only cookie

Protected routes verify JWT on each request

User session persists across refreshes and devices

⚙️ Environment Variables

Create a .env file in the backend directory:

PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
NODE_ENV=development

▶️ Getting Started (Local Setup)
1️⃣ Clone the repository
git clone https://github.com/your-username/xstream.git
cd xstream

2️⃣ Install dependencies

Backend

cd backend
npm install


Frontend

cd frontend
npm install

3️⃣ Run the application

Backend

npm run dev


Frontend

npm run dev


App runs on:

Frontend → http://localhost:5173

Backend → http://localhost:5001

🧪 Error Handling & Edge Cases

Invalid JWT → automatic logout

Unauthorized API access → 401 Unauthorized

Network failures handled via React Query retries

Fallback avatars for missing profile images

📈 Future Improvements

🌐 Language matching & recommendation system

🧠 AI-assisted conversation feedback

📊 User analytics & learning progress tracking

🔔 Push notifications

📱 Mobile-first PWA support

🧠 Key Learnings

Building event-driven real-time systems

Secure authentication using JWT + cookies

Integrating third-party real-time APIs at scale

Managing server state efficiently with TanStack Query

Designing scalable MERN architectures


👤 Author

Arnab Chakraborty
Full-Stack Developer (MERN)
