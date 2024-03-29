import { Route, Routes } from 'react-router-dom';

import Home from './home page/home.tsx';
import LogInBox from './login page/login.tsx';


// TODO: instagram's root page is also the sign-in, need to check if user is logged in
// TODO: move navbar to specific page's elements when they are completed
// Only Explore and Profile lead to new pages
function App() {
  return ( 
    <Routes>
    
      {/* Home Path */}
      <Route path="/" element={ <Home/> }/>

      {/* Log-In Page */}
      <Route path="/login" element={ <LogInBox/> }/>

      {/* 
        Profile Route 
        The path should be the username/tag of the user
      */}
      {/*<Route path="" element={ <NavBar/> }/>*/}

      
  </Routes>


  );
}

export default App;
