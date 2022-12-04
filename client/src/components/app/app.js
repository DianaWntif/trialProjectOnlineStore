import { Component } from 'react';

import Header from '../header/header';
import ModalSignIn from "../modalDialog/modalDialog";

import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App(){
  return (
    <div className='app'>
        <Header/>
   </div>
  )
} 

/*
 <div className='app'>
        <Header/>
        <ModalSignIn/>
   </div>
 */
export default App;
