import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/Home";
import About from "./pages/About";
import Details from "./pages/Details";
import Form from "./pages/ReservationForm"
/*import Details2 from "./pages/Details-2";
import Details3 from "./pages/Details-3";
import Details4 from "./pages/Details-4";
import Details5 from "./pages/Details-5";
import Details6 from "./pages/Details-6";*/


const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/About" exact Component={About} />
          <Route path="/Details" exact Component={Details} />
          <Route path="/Form" exact Companent={Form} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
