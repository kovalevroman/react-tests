import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Panel from './Panel'
import Table from "./Table";

function App() {

  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive( !active );
  };

  return (
    <>
      <button onClick={toggleActive}>test</button>
      <Panel />
      <Table />
    </>
  );
}

export default App;
