import "./App.css";
import react from "react";
import { Component } from "react/cjs/react.production.min";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" render={Home} />
          <Route path="/about" render={About} />
          <Route path="/project" render={Project} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
