import { Component } from 'react';

import Header from '../header/header';
import SearchPanel from '../search-panel/search-panel';
import UserNav from '../userNav/userNav'

import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
  return (
    <div className='app'>
        <Header/>
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
