import React from 'react';
import './PopButton.css'; // Asegúrate de haber guardado el CSS de la Fase 2 aquí

export default function PopButton({ id, isActive }) {
  // Determinamos la clase dinámicamente según el estado
  const statusClass = isActive ? 'on' : 'off';

  return (
    <button className={`pop-btn ${statusClass}`}>
      {/* Puedes imprimir el ID aquí temporalmente para guiarte visualmente */}
      {id}
    </button>
  );
}