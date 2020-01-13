import React from "react";
// import Footer from "./components/Footer/"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SaveBooks from "./pages/saveBook";
import NoMatch from "./pages/noMatch";
import Navbar from "./components/NavBar"
import "./App.css";
import SearchBooks from "./pages/searchBook";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/saved" component={SaveBooks} />
          <Route exact path="/saved/:id" component={SaveBooks} />
          <Route component={NoMatch} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  )
}

export default App;
