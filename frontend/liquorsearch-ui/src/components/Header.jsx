import React from 'react';

export default function Header({ title, buttonLabel }) {
  return (
    <header className="navbar">
      <h1 className="navbar__title">{title}</h1>
      <button className="navbar__btn">{buttonLabel}</button>
    </header>
  );
}
