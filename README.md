# Sprint Task Board

A drag-and-drop kanban board built with React. Part of the Lab section of my portfolio.

## Features
- Drag tasks between To Do / In Progress / Done
- Add or delete tasks, set priority
- Board state persists in localStorage (survives a refresh)
- No external state library — just hooks

## Stack
React 19, Vite, plain CSS (no UI framework).

## Local dev
```
npm install
npm run dev
```

## Build
```
npm run build
```
Outputs to `dist/`, configured for deployment under `/lab/react-sprint-board/`.

## Structure
```
src/
  components/   Board, Column, TaskCard, AddTaskForm
  hooks/        useLocalStorage
  data/         seed tasks + column config
  App.jsx
  main.jsx
```
