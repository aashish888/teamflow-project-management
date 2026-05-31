# TeamFlow Frontend

TeamFlow Frontend is a responsive Project and Task Management Dashboard built using Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS

## Features

- Login page
- Forgot password page
- Dashboard statistics
- Task listing
- Add task
- Edit task
- Delete task
- Search tasks
- Filter tasks by status and priority
- View team members
- Add team members
- Display member role and email
- Reusable components
- Responsive UI
- Loading and error UI states

## Folder Structure

```text
src
  app
    dashboard
    forgot-password
    login
    tasks
    team-members
  components
  data
  lib
  types


  __________

  Run Locally
Install dependencies:

npm install
Start development server:

npm run dev
Open:

http://localhost:3000
Pages
/login
/forgot-password
/dashboard
/tasks
/team-members

Notes
The frontend currently uses mock data from src/data/mock-data.ts. It is structured so backend API integration can be added later.





API integration add 
- Backend API integration for tasks, team members, and dashboard stats
Backend URL add 
## Backend API

The frontend connects to:

http://localhost:8080/api
Important run note 
Run the backend first, then run the frontend.
Pages section already 
Mock data note update 
Mock data is used as fallback/demo data. Main task and team member flows are connected with the Spring Boot backend APIs.