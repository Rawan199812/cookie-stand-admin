import './App.css';
import {Head}  from './pages/Head';
import {Header}  from './pages/Header';
import {Main}  from './pages/Main';
import {Footer}  from './pages/Footer';
import { useState } from 'react'


import React from 'react';

function App() {
  const [title,setTitle] = useState('Cookie Stand Admin');


  return (
    <div className="App">
      <Head  title={title}/>
      <Header/>
      <Main/>
      <Footer/>
      
      
      <h1>My first time ever</h1>
    </div>
  );
}

export default App;
