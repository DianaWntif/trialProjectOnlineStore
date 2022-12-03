import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AutorizationForm from '../autorization-form/autorization-form'

import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
  return (
    <div className='app'>
      <AppInfo/>


    <div className="navbar-user">
            <SearchPanel />
            <AutorizationForm />
      </div>
   </div>
    
  )
} 
//   return (
//     // <div className="app">
//     //   <AppInfo
//     //    />

//     //   <div className="search-panel">
//     //       <SearchPanel/>
//     //       <AppFilter/>
//   )
// }

export default App;
