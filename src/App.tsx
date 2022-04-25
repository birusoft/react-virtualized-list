import React, { useEffect, useState } from 'react';
import './App.css';
import List from './List';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => setItems(data));
  })

  return (
    <div className="App">
      <List items={items}></List>
    </div>
  );
}

export default App;
