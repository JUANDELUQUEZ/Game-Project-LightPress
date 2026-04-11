// client/src/App.jsx
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Board from './components/Board';
// El index.css de la Fase 2 ya debería estar importado en tu main.jsx

export default function App() {
  return (
    <div className="app-container">
      <Header username="Eduardo_Dev" coins={150} />
      <main className="game-area">
        <Sidebar />
        <Board />
      </main>
    </div>
  );
}