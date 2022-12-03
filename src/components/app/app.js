import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';

import './app.css';
// import 'bootstrap/dist/css/bootstrfap.min.css';


function App(){
  return (
    <div className='app'>
      <AppInfo/>
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
