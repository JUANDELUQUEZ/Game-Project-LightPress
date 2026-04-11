import React from 'react';

export default function Header({ username, coins }) {
  return (
    <header className="game-header">
      <div className="brand">
        <h1>LightPress</h1>
      </div>
      <div className="user-stats">
        <span>Usuario: {username}</span>
        <span>Monedas: {coins}</span>
      </div>
      <div className="header-actions">
        <button className="icon-btn"><span>x</span></button>
        <button className="icon-btn"><span>co</span></button>
      </div>
    </header>
  );
}