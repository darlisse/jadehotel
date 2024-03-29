import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/Home";
import About from "./pages/About";
import Details from "./pages/Details";
import Form from "./pages/ReservationForm";
import Details2 from "./pages/Details-2";
import Details3 from "./pages/Details-3";
import Details4 from "./pages/Details-4";
import Details5 from "./pages/Details-5";
import Details6 from "./pages/Details-6";


const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/About" exact Component={About} />
          <Route path="/Details" exact Component={Details} />
          <Route path="/Details-2" exact Component={Details2} />
          <Route path="/Details-3" exact Component={Details3} />
          <Route path="/Details-4" exact Component={Details4} />
          <Route path="/Details-5" exact Component={Details5} />
          <Route path="/Details-6" exact Component={Details6} />
          <Route path="/Details/Form" exact Component={Form} />
          <Route path="/Details-2/Form" exact Component={Form} />
          <Route path="/Details-3/Form" exact Component={Form} />
          <Route path="/Details-4/Form" exact Component={Form} />
          <Route path="/Details-5/Form" exact Component={Form} />
          <Route path="/Details-6/Form" exact Component={Form} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
