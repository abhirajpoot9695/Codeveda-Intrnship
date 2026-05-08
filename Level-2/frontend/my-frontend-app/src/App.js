import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // State management for users and loading[span_4](end_span)
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

// Function to fetch data from Task 2 API[span_5](end_span)
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:3000/api/users');
      setUsers(response.data);
    } catch (err) {
      setError("API connect nahi ho pa rahi! Pehle backend server start karein.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>User Directory (React)</h1>
        <button onClick={fetchUsers} disabled={loading}>
          {loading ? 'Fetching...' : 'Fetch Users'}
        </button>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div className="user-grid">
          {users.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </header>
    </div>
  );
}

// Reusable UI Component[span_6](end_span)
const UserCard = ({ user }) => (
  <div className="user-card">
    <p><strong>ID:</strong> {user.id}</p>
    <p><strong>Name:</strong> {user.name}</p>
  </div>
);

export default App;