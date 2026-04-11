import React from 'react';
import PopButton from './PopButton';
import './Board.css';

export default function Board() {
  // Generamos un array dinámico de 11 posiciones (del 0 al 10)
  const buttons = Array.from({ length: 11 }, (_, index) => index);

  return (
    <div className="board-container">
      {buttons.map((btnId) => (
        <PopButton key={btnId} id={btnId} isActive={false} />
      ))}
    </div>
  );
}