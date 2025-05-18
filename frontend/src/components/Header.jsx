import React from 'react';
import './Header.css';

export default function Header({ title, onToggleSidebar }) {
  return (
    <header className="navbar">
      <button className="navbar__toggle" onClick={onToggleSidebar}>
        ☰
      </button>
      <h1 className="navbar__title">{title}</h1>
    </header>
  );
}
