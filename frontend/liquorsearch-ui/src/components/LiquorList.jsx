import React, { useState, useEffect } from 'react';

export default function LiquorList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/api/inventory')
      .then(r => r.json())
      .then(setItems)
      .catch(console.error);
  }, []);

  return (
    <section>
      {items.length === 0
        ? <p>Loading inventory…</p>
        : items.map(item => (
            <div key={item.id} className="liquor-card">
              <h2>{item.name}</h2>
              <p>Type: {item.containerType}</p>
              <p>ABV: {item.abv}%</p>
              <p>Qty: {item.quantity}</p>
            </div>
          ))
      }
    </section>
  );
}
