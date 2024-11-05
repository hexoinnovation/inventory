// src/Inventory.js
import { useState } from 'react';
import './index.css';

const Inventory = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');

  const addItem = () => {
    if (itemName) {
      setItems([...items, itemName]);
      setItemName('');
    }
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="inventory-container">
      <h1>Inventory Management</h1>
      <div className="input-container">
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Enter item name"
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index} className="item">
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;
