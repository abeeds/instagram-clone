import React from 'react';
import NavBar from './navbar';
import { Route, Routes } from 'react-router-dom';


// TODO: instagrams root page is also the sign-in, need to check if user is logged in
// TODO: move navbar to specific page's elements when they are completed
// Only Explore and Profile lead to new pages
function App() {
  return ( <Routes>
    
    {/* Home Path */}
    <Route path="/" element={
      <NavBar/>
    }/>

    {/* Explore Path */}
    <Route path="/explore/"/>

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
