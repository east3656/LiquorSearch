import React, { useState, useEffect } from 'react';
import { liquorList } from './LiquorData.js';  // note .js

export default function LiquorList({filter}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/inventory')
      .then(res => res.json())
      .then(data => {
        // merge each API item with its local metadata
        const enriched = data.map(item => ({
          ...item,
          ...(liquorList[item.id] || {})   // spread in image & volume if present
        }));
        console.log('Enriched items:', enriched);
        setItems(enriched);
      })
      .catch(err => console.error('Fetch error:', err));
  }, []);

   const displayed = filter //argument filter for sidebar tabs
    ? items.filter(item => item.containerType.toLowerCase() === filter.toLowerCase())
    : items;

  if (items.length === 0) return <p>No items to display.</p>;

  return (
    <section className="liquor-grid">
      {displayed.map(({ id, name, containerType, abv, quantity, image, volume }) => {
        console.log('Rendering image for', name, 'from', image);
        return (
          <div key={id} className="liquor-card">  
            {image && (
              <img
                src={image}
                alt={name}
                className="liquor-card__img"
              />
            )}
            <h3 className="liquor-card__name">{name}</h3>
            <p>Container: {containerType}</p>
            {volume && <p>Volume: {volume}</p>}
            <p>ABV: {abv}%</p>
            <p>Qty: {quantity}</p>
          </div>
        );
      })}
    </section>
  );
}
