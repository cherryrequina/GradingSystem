import React from "react";
import "./style.css";

function App() {
    
  const renderForm = (
    <div className="login-form">
      <form>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
       
      </form>
 

    </div>
    
  );
}

export default App;