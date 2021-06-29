import './App.css';
import {Head}  from './pages/Head';
import {Header}  from './pages/Header';
import {Main}  from './pages/Main';
import {Footer}  from './pages/Footer';
import { useState } from 'react'


import React from 'react';

function App() {
  const [location,setLocation] = useState();
  const [max,setMax] = useState();
  const [min,setMin] = useState();
  const [avgCookie,setAvgCookie] = useState();

  function CookeiHandler(e){
    e.preDefault();
    setLocation(e.target.location.value);
    setMin(e.target.min.value);
    setMax(e.target.max.value);
    setAvgCookie(e.target.avgCookie.value);
  }
  return (
    <div className="App">
      <Head />
      <Header />
      <Main  location={location} min={min} max={max} avgCookie={avgCookie} handler={CookeiHandler}/>
      <Footer/>
      
      
      <h1>My first time ever</h1>
    </div>
  );
}

export default App;
