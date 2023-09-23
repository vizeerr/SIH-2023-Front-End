
import "./App.css";
import Home from "./pages/Home";
import Service from "./pages/Service";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TranslateComponent from "./components/TranslateComponent";
import Contact_form from "./components/Profile-page/Contact_form";
// import Testimonials from "./components/Profile-page/testimonials";
import Reviews from "./components/Profile-page/Reviews";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Contact_form/>
      <Reviews/>
    </>
  );
}

export default App;
