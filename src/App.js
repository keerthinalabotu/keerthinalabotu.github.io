import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./Pages/Homescreen";
import SocialButtons from './Pages/SocialButtons';

function App() {
  return (
    <div className="App">
      <div className="background">
      <Home/>
      <footer className="footer">
        <SocialButtons />
      </footer>
      </div>
    </div>
  );
}

export default App;
