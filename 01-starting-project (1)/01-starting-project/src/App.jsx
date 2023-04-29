import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


// we are gona use useeffect so why useEffect->
// first understand what does useState wheneven u will set something then it render the whole page again and stuck in infinte loop
// so to solve this problem useEffect came into this field ->
/* useEffect {()=>{

 }    , [])  -> it container two arguments , 1) call back function , 2nd is array of dependencies  */
// mean if u ever see changes in dependencies then this useEffect will execute the who page , first it will not execute itself
// first it will execute others and the  


//   now when ever i am log in then it should save in localstorage and then it will save 
const checkStatus =  localStorage.getItem('isLoggedIn');

   // wrong way to do it -> ti will be in infine loop
   
  //  if(checkStatus === '1'){
  //   setIsLoggedIn(true); // see it will be infinte
  //  }
   // dry run first it will check it is true then it will again call this page to render 
   // then again whole page will be render and stuck in infinte loop

useEffect(()=>{
   if(checkStatus === '1'){
    setIsLoggedIn(true);
   }
} , []); // only runs once when page starts , 

   // other example in login component



  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn" , '1'); // make sure to add string 
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
