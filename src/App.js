import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ShowUser from './components/ShowUser';
import './App.css';

const URL = process.env.REACT_APP_GITHUB_URL || 'https://api.github.com/users/rajukumarrails'

function App() {
  const [user, setUser] = useState({});
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    if (!active) {
      fetch(URL)
        .then(response => response.json())
        .then(data => setUser(data));
    }
    setActive(!active)
  }

  return (
    <div className="App">
      <Button variant="secondary" onClick={handleToggle}>Toggle User</Button>
      {active && <ShowUser user={user} />}
    </div>
  );
}

export default App;
