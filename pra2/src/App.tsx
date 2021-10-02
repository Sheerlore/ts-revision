import React, { useEffect, useState } from 'react';
import './App.css';

const loadJSON = (key: string) =>
  key && JSON.parse(localStorage.getItem(key));

const saveJSON = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));

function GitHubUser({ login }: {login:string}) {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(response => response.json())
      .then(setData)
      .catch(console.error);
  }, [login]);

  if (data) {
    return <pre>{JSON.stringify(data, null, 2)}</pre>
  }
  return null;
}


function App() {
  return (
    <div className="App">
      <GitHubUser login="Sheerlore" />
    </div>
  );
}

export default App;
