import React, { useState } from 'react';
import './index.css';

// Initial items for the packing list
const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: true },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
];

// Main App component
export default function App() {
  // State to manage the list of items
  const [items, setItems] = useState(initialItems);

  // Function to add a new item to the list
  function addItem(description, quantity) {
    const newItem = {
      id: Date.now(), // Use Date.now() for a unique id
      description,
      quantity: parseInt(quantity),
      packed: false,
    };
    setItems([...items, newItem]);
  }

  return (
    <div className="app">
      <Logo />
      <Form addItem={addItem} />
      <PackingList items={items} />
      <Stats items={items} />
    </div>
  );
}

// Logo component
function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}

// Form component for adding new items
function Form({ addItem }) {
  // State for form inputs
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('1');

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    if (!description.trim()) return;
    addItem(description, quantity);
    setDescription('');
    setQuantity('1'); // Reset to '1' instead of an empty string
  }

  // Options for the quantity dropdown
  const options = Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
    <option key={num} value={num}>
      {num}
    </option>
  ));

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 🥰 trip</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {options}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}

// PackingList component to display the list of items
function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

// Item component to display each item in the list
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

// Stats component to display statistics about the list
function Stats({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter(item => item.packed).length;
  
  return (
    <footer className="stats">
      <em>You have {totalItems} items in your list, and you already packed {packedItems}</em>
    </footer>
  );
}
