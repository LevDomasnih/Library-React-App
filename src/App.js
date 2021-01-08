import React from 'react';
import './App.css';
import AddBook from "./components/AddBook/AddBook";
import TableContainer from "./components/Table/TableContainer";

const App = () => {
  return (
    <div className="App">
        <AddBook />
        <TableContainer />
    </div>
  );
}

export default App;
