import React, { useState, useEffect } from 'react';
import BusinessList from './components/BusinessList/BusinessList';
import Search from './components/Search/Search';
import './App.css'; 
//import Yelp from './components/utils/Yelp'
import mock from './components/mock'

function App() {

  return (
    <div>
      <h1 className = 'header'>Ravenous</h1>
      <Search />
      <BusinessList businesses = {mock}/>
    </div>
  )
}

export default App;
