// src/components/LiquorList.jsx
import React, { useState, useEffect } from 'react';

export default function LiquorList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/api/inventory')
      .then(res => {
        console.log('Fetch response status:', res.status);
        return res.json();
      })
      .then(data => {
        console.log('Fetched inventory:', data);
        setItems(data);
      })
      .catch(err => console.error('Error fetching inventory:', err));
  }, []);

  return (
    <section className="liquor-grid">
      {items.length === 0
        ? <p>No items to display.</p>
        : items.map(item => (
            <div key={item.id} className="liquor-card">
              <h3>{item.name}</h3>
              <p>{item.containerType} – {item.abv}% ABV – qty {item.quantity}</p>
            </div>
          ))
      }
    </section>
  );
}
