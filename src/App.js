
import { Route, Routes } from 'react-router';
import './App.css';
import Register from "./Components/Register.js";
import Login from "./Login";
import Home from "./Home"


// import Registration from "./Components/Registration/registration"
 import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {

  
  
  return (
    
    <div className="App">
      <div style={{ marginTop : '-3.5rem'}}></div>
    
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/register" element={<Register />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );

}
export default App;
// https://github.com/AkshataGanbote/Registration_Login_Form_MERN_Stack/tree/main/frontend/src/components