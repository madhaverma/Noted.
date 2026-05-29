<img width="2176" height="1176" alt="Screenshot 2026-05-29 144515" src="https://github.com/user-attachments/assets/f2500fd0-12cc-4bfd-84a4-846f5d78c7db" />

# 📓 Noted

A minimal, distraction-free note-taking app with a React frontend and a Node.js backend. Capture ideas, search them instantly, and stay organized — without the clutter.

**Live demo:** [noted-psi-one.vercel.app](https://noted-psi-one.vercel.app/notes)

---

## Features

- **Create, edit & delete notes** — full CRUD with a clean, focused editor
- **Search** — filter notes instantly as you type
- **Tags** — organize notes by topic and filter by tag
- **Responsive** — works on desktop, tablet, and mobile

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React + Vite |
| Styling | CSS Modules |
| Backend | Node.js |
| Deployment | Vercel |

---

## Project Structure

```
noted/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── utils/          # Helper functions
│   │   ├── App.jsx
│   │   ├── App.module.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── server/                 # Node.js backend
    ├── model/              # Data models
    ├── index.js            # Entry point
    └── package.json
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm

### 1. Clone the repo

```bash
git clone https://github.com/madhaverma/Noted.
```

### 2. Start the server

```bash
cd server
npm install
node index.js
```

### 3. Start the client

```bash
cd client
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.



---



