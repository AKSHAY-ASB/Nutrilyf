import React from "react";
import "./App.css";
import Navbar1 from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
// import Services from './components/pages/Services';
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import ContactUs from "./components/pages/ContactUs";
import Marketing from "./components/pages/JaggeryBlock/JaggeryBlock";
import About from "./components/pages/About";
import Consulting from "./components/pages/JaggeryPowder";
import ImageSlider from "./components/ImageSlider";
import Cards1 from "./components/Gallery";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import Packages from "./components/Packages";
import Services from "./components/Products/Services";
import Lorem from "./components/Gallery/Gallery";
import NewNav from "./components/Nav/Nav";
import Gallery from "./components/Gallery/Gallery";
import NewNavbar from "./components/NewNavbar";
import JaggeryCandy from "./components/pages/JaggeryCandy";
import JaggeryLiquid from "./components/pages/JaggeryLiquid";
import JaggeryBlock from "./components/pages/JaggeryBlock/JaggeryBlock";
import JaggeryPowder from "./components/pages/JaggeryPowder";
import CollapsibleExample from "./components/ReactNavbar";
import ScrollArrow from './components/ScrollToTop/ScrollToTop'
import JB from "./components/pages/JaggeryBlock/JB";
import JC from "./components/pages/JaggeryCandy/JC";
import JL from "./components/pages/JaggeryLiquid/JL";
import JP from "./components/pages/JaggeryPowder/JP";


function App() {
  return (
    <Router>
      <CollapsibleExample />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/products" exact component={Packages} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/jaggeryblocks" exact component={JB} />
        <Route path="/jaggerycandy" exact component={JC} />
        <Route path="/jaggeryliquid" exact component={JL} />
        <Route path="/jaggerypowder" exact component={JP} />
        <Route path="/contact-us" component={Contact} />
      </Switch>
      <ScrollArrow />
    </Router>
  );
}

export default App;
