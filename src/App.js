import React from 'react';
import './App.css';
import AddBookContainer from "./components/AddBookContainer";
import TableContainer from "./components/TableContainer";

const App = () => {
  return (
    <div className="App">
        <AddBookContainer />
        <TableContainer />
    </div>
  );
}

export default App;
