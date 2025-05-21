import React from 'react';
import './Sidebar.css';

export default function Sidebar({ open, sections, selected, onSelect }) {
  return (
    <div className={`sidebar ${open ? 'open' : 'closed'}`}>
      <ul className="sidebar__list">
        {sections.map(sec => (
          <li
            key={sec}
            className={`sidebar__item ${selected === sec ? 'active' : ''}`} 
            onClick={() => onSelect(sec)}
          >
            {sec}
          </li>
        ))}
      </ul>
    </div>
  );
}
