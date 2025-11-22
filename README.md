# MERN Portfolio

A fully responsive, full-stack portfolio website built using the MERN Stack (MongoDB, Express, React, Node.js) with Bootstrap 5.

## Features

- **Hero Section**: Profile introduction.
- **About**: Bio and background.
- **Skills**: Categorized technical skills.
- **Projects**: Showcase of projects with details and GitHub links.
- **Experience**: Internship and work history.
- **Education**: Academic background.
- **Contact**: Functional contact form storing messages in MongoDB.
- **Theme Toggle**: Dark/Light mode support.
- **Responsive Design**: Mobile-first approach using Bootstrap 5.

## Tech Stack

- **Frontend**: React (Vite), Bootstrap 5, Axios, React Router
- **Backend**: Node.js, Express, Mongoose, dotenv, cors, express-validator
- **Database**: MongoDB

## Setup Instructions

### Prerequisites
- Node.js installed
- MongoDB installed and running locally (or use Atlas URI)

### Installation

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd Portfolio
    ```

2.  **Backend Setup**
    ```bash
    cd server
    npm install
    ```
    - Create a `.env` file in `server/` with:
      ```env
      MONGO_URI=mongodb://localhost:27017/portfolio
      PORT=5000
      ```
    - Seed the database:
      ```bash
      node seed.js
      ```
    - Start the server:
      ```bash
      npm start
      ```

3.  **Frontend Setup**
    ```bash
    cd client
    npm install
    ```
    - Start the development server:
      ```bash
      npm run dev
      ```

## Deployment

### Frontend (Netlify/Vercel)
1.  Build the project: `npm run build`
2.  Deploy the `dist` folder.
3.  Set environment variable `VITE_API_URL` to your backend URL if needed (update `utils/api.js` to use `import.meta.env.VITE_API_URL || 'http://localhost:5000/api'`).

### Backend (Render/Railway)
1.  Connect your repository.
2.  Set `MONGO_URI` in environment variables.
3.  Start command: `node server.js`.

## API Endpoints

- `GET /api/skills` - Fetch skills
- `GET /api/projects` - Fetch projects
- `GET /api/internships` - Fetch internships
- `GET /api/education` - Fetch education
- `POST /api/contact` - Send a message

