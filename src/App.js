import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from './pages/Home/Home';
import Footer from "./components/Footer/Footer";
import Popup from "./ui/Popup/Popup";
import './App.css';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  window.onload = function () {
    setTimeout(function () {
        setShowPopup(true);
    }, 30000);
  }

  const onMouseMoveHandler = (e) => {
    if (e.clientY < 60) {
      setShowPopup(true);
    }
  }

  return (
    <Router>
      <div onMouseMove={onMouseMoveHandler} className="App">
        {showPopup ? <Popup click={() => setShowPopup(false)} /> : null}
        <NavBar />
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
