import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './home page/home';
import Explore from './explore page/explore';


// TODO: instagram's root page is also the sign-in, need to check if user is logged in
// TODO: move navbar to specific page's elements when they are completed
// Only Explore and Profile lead to new pages
function App() {
  return ( <Routes>
    
    {/* Home Path */}
    <Route path="/" element={
      <Home/>
    }/>

    {/* Explore Path */}
    <Route path="/explore/" element={
      <Explore/>
    }/>

    {/* 
      Profile Route 
      The path should be the username/tag of the user
    */}
    {/*<Route path="" element={
      <NavBar/>
    }/>*/}

  </Routes>


  );
}

export default App;
