import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/Home";
import About from "./pages/About";
import Room from "./pages/Room";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/Room" exact Component={Room} />
          <Route path="/About" exact Component={About} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
