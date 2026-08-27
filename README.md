# Job Portal — Frontend

A React + TypeScript + Vite frontend for a job recruitment platform. This project is based on the "React + TypeScript + Vite (Hỏi Dân IT)" template and has been customized to work as the client application for the [NestJS Job Portal API](https://github.com/miyamuradesuu/nestjs) backend.

It consumes the backend's REST endpoints for authentication, job listings, company management, resumes, file uploads, roles/permissions and email notifications.

## ✨ Features

- 🔐 Login / register flows against the backend's JWT auth endpoints
- 👤 User account and profile pages
- 🏢 Company listing and detail views
- 💼 Job listing, search and detail views
- 📄 Resume upload and management
- 📁 File upload support (avatars, resumes, company logos, etc.)
- 🛡️ Role/permission-aware UI (shows or hides features based on the logged-in user's role)
- 🔄 Automatic access/refresh token handling for authenticated requests

## 🛠️ Tech Stack

| Technology         | Purpose                        |
| ------------------ | ------------------------------- |
| React 18            | UI library                      |
| TypeScript          | Programming language            |
| Vite                | Build tool / dev server         |
| React Router DOM    | Client-side routing             |
| ESLint              | Code linting                    |


## 📁 Project Structure

```
react-vite-nextjs/
├── public/               # Static assets
├── src/                  # Application source code
│   ├── components/       # Reusable UI components
│   ├── pages/             # Route-level pages (jobs, companies, auth, etc.)
│   ├── services/          # API calls to the NestJS backend
│   └── ...
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm
- The [NestJS backend](https://github.com/miyamuradesuu/nestjs) running locally (or a URL to a deployed instance)

You can verify your installation with:

```bash
node --version
npm --version
```

### 1. Clone the repository

```bash
git clone https://github.com/miyamuradesuu/react-vite-nextjs.git
cd react-vite-nextjs
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root and point it to your running backend, for example:

```
VITE_BACKEND_URL=http://localhost:8000
```

> Update the port/host to match wherever your NestJS API is running.

### 4. Run the backend

This frontend expects the [NestJS Job Portal API](https://github.com/miyamuradesuu/nestjs) to be running. Follow that repository's README to install dependencies, configure MongoDB, and start the backend (`npm run dev` in that project).

### 5. Start the frontend

```bash
npm run dev
```

The app will be available at:

```
http://localhost:5173/
```

## 🔗 Backend Integration

This frontend is designed to work together with the NestJS backend, which exposes endpoints such as:

- `POST /auth/register` — create an account
- `POST /auth/login` — log in
- `GET /auth/account` — get the current authenticated user
- `GET /auth/refresh` — refresh the access token
- `POST /auth/logout` — log out
- Job, company, resume, file, role and permission endpoints under their respective routes

See the [backend README](https://github.com/miyamuradesuu/nestjs#readme) for the full list of modules and API details.

## 👨‍💻 Author

**Nguyen Minh**

GitHub: <https://github.com/miyamuradesuu>
