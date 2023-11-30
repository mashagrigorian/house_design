import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header/Header.jsx";
import HomePage from "./HomePage/HomePage.jsx";
import About from "./About/About.jsx";
import Portfolio from "./OurPortfolio/OurPortfolio";
import Reviews from "./Reviews/Reviews.jsx";
import Partners from "./Partners/Partners.jsx";

import BurningSuggestions from "./Burning_Suggestions/Burning_Suggestions";
import Furniture from "./Furniture/Furniture";
import FurnitureParts from "./Furniture/FurnitureParts";
import Blog from "./Blog/Blog.jsx";
import FAQ from "./FAQ/FAQ.jsx";
import Footer from "./Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="app">
          <Header />
          <HomePage />
          <About />
          <Portfolio />
          <Reviews />
          <Partners />
          <BurningSuggestions />
          <Furniture />
          <FurnitureParts />
          <Blog />
          <FAQ />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
