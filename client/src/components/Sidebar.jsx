// client/src/components/Sidebar.jsx
import React from 'react';
import './Sidebar.css'; // Asegúrate de vincular su CSS

export default function Sidebar() {
  return (
    <aside className="game-sidebar">
      <div className="mode-block">
        <h2>Game modes</h2>
        {/* Simplified for maquetacion */}
        <span>Clásico | Memoria</span>
      </div>
      <div className="score-block">
        <h3>Puntuacion</h3>
        <span>0</span>
      </div>
    </aside>
  );
}