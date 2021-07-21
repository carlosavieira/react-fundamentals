// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react';

function UsernameForm({ onSubmitUsername }) {
  const [error, setError] = React.useState(null);


  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.username.value;
    console.log({ value })
    onSubmitUsername(value);
  }

  const handleChange = (event) => {
    const value = event.target.value;

    const isLowerCase = value === value.toLowerCase();

    if (isLowerCase) {
      setError(null);
    } else {
      setError('Username must be lowercase.');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" onChange={handleChange} />
      </div>
      <div style={{ color: 'red' }}>{error}</div>
      <button disabled={!!error} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
