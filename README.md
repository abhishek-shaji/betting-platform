# Online Betting Dashboard

This project is a simple online betting dashboard that displays a list of sports events, their corresponding odds, and allows users to place bets. It's built using Next.js for the frontend and Nest.js for the backend, organized in a NX monorepo.

## Prerequisites

- Node.js (version 14 or later recommended)
- npm or yarn
- PostgreSQL

## Project Structure

This project is set up as an Nx monorepo with two main applications:

- `betting-client`: Next.js frontend application
- `betting-api`: Nest.js backend application

## Setup

1. Clone the repository:
```bash
git clone https://github.com/abhishek-shaji/betting-platform.git
```

The backend API should now be running on `http://localhost:3000` (or your configured port).
The frontend application should be available at `http://localhost:4200` (or your configured port).

## Features

- Backend API endpoint to fetch sports events: `/api/events`
- Frontend dashboard displaying list of sports events
- Option to place bets on events
- Minimal styling with CSS or a CSS framework

## Technologies Used

- Frontend: Next.js, React, TypeScript
- Backend: Nest.js, Node.js, TypeScript
- Database: PostgreSQL
- Monorepo Tool: Nx

## Future Improvements

- Implement user authentication
- Add more comprehensive test coverage
- Enhance the UI/UX of the betting dashboard

For any questions or issues, please contact the project maintainers.
