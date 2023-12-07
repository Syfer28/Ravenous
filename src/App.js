import React from 'react';
import BusinessList from './components/BusinessList/BussinessList';
import Search from './components/Search/Search';
import './App.css';

function App() {
  return (
    <div>
          <h1 className = 'header'>Ravenous</h1>
          <Search />
          <BusinessList />
    </div>
  )
}

export default App;
