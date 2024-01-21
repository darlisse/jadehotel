import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/Home";
import About from "./pages/About";
import Details from "./pages/Details";


const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/About" exact Component={About} />
          <Route path="/Details" exact Component={Details} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
