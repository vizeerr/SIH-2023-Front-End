import "./App.css";
import Home from "./pages/Home";
import Service from "./pages/Service";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact_form from "./components/Profile-page/Contact_form";
import Reviews from "./components/Profile-page/Reviews";
import Profile from "./pages/Profile";
import DocumentCreate from "./pages/DocumentCreate";
function App() {
  return (
    <>

      <Contact_form/>
      <Reviews/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="services" element={<Service />} />
          <Route exact path="profile" element={<Profile />} />
          <Route path="/templates" element={<DocumentCreate/>}/>
        </Routes>
      </Router>

      {/* <Home /> */}
      {/* <Service /> */}
    </>
  );
}

export default App;
