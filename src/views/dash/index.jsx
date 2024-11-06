// src/Stock.js
import { useState } from 'react';
import './index.css';

const Stock = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const addItem = () => {
    if (itemName && itemQuantity) {
      const newItem = {
        name: itemName,
        quantity: parseInt(itemQuantity),
      };
      if (editingIndex !== null) {
        const updatedItems = items.map((item, index) =>
          index === editingIndex ? newItem : item
        );
        setItems(updatedItems);
        setEditingIndex(null);
      } else {
        setItems([...items, newItem]);
      }
      setItemName('');
      setItemQuantity('');
    }
  };

  const editItem = (index) => {
    const item = items[index];
    setItemName(item.name);
    setItemQuantity(item.quantity);
    setEditingIndex(index);
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="stock-container">
      <h1>Stock Management</h1>
      <div className="input-container">
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Item Name"
        />
        <input
          type="number"
          value={itemQuantity}
          onChange={(e) => setItemQuantity(e.target.value)}
          placeholder="Quantity"
        />
        <button onClick={addItem}>{editingIndex !== null ? 'Update' : 'Add'}</button>
      </div>
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index} className="item">
            {item.name} - {item.quantity}
            <div>
              <button onClick={() => editItem(index)}>Edit</button>
              <button onClick={() => removeItem(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stock;
