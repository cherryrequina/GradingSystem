import React, { useState } from "react";
import "./style.css";


function App() {
    
    const [currentView, setCurrentView] = React.useState("view1");
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    // User Login info
    const database = [
      {
        username: "user1",
        password: "pass1"
      },
      {
        username: "user2",
        password: "pass2"
      }
    ];
  
    const errors = {
      uname: "invalid username",
      pass: "invalid password"
    };
  
    const handleSubmit = (event) => {
      //Prevent page reload
      event.preventDefault();
  
      var { uname, pass } = document.forms[0];
  
      // Find user login info
      const userData = database.find((user) => user.username === uname.value);
  
      // Compare user info
      if (userData) {
        if (userData.password !== pass.value) {
          // Invalid password
          setErrorMessages({ name: "pass", message: errors.pass });
        } else {
          setIsSubmitted(true);
        }
      } else {
        // Username not found
        setErrorMessages({ name: "uname", message: errors.uname });
      }
    };
  
  
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );

  const ViewOne = ({onClick}) => (
    <div className="login-form">
<form onSubmit={handleSubmit}>
      <div className="title">
        Login
        </div>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
       
        <div className="button-container">
          <input type="submit" />
        </div>
        No account yet? <button onClick={() => onClick("view2")}>Login</button>
      </form>
      
    </div>
  
);
const ViewTwo = ({onClick}) => (

         <div className="login-form">
         <form>
         <div className="title">
        Regiter Here
        </div>
        <div className="input-container">
          <label>Email </label>
          <input type="email" name="email" required />
        </div>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="password" required />
        </div>
        <div className="input-container">
          <label>Confirm Password </label>
          <input type="password" name="password" required />
        </div>
        Already have an account? <button onClick={() => onClick("view1")}>SigIn here</button>
        <div className="button-container">
          <input type="submit" />
        </div>
        
      </form>
      
    </div>
  );
  

  return (

    <div className="app">
     
      <div>
        {
          currentView === "view1" ? 
          <ViewOne onClick={page => setCurrentView(page)} /> : 
          <ViewTwo onClick={page => setCurrentView(page)} />  
          
        
       }
        </div>
       <div>
       <div>
        
        {isSubmitted ? <div>User is successfully logged in!</div> : ViewOne}
      </div>
      </div>
        </div>

  );
}

export default App;