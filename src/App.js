import {BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header/Header.jsx";
import HomePage from "./HomePage/HomePage.jsx";
import About from "./About/About.jsx";
import Portfolio from "./OurPortfolio/OurPortfolio";


function App() {
  return (
    <div className="App">
      <Router>
        <div className="app">
          <Header />
            <HomePage />
            <About />
            <Portfolio />
        </div>
      </Router>
    </div>
  );
}

export default App;
