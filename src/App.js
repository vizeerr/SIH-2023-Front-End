import "./App.css";
import Home from "./pages/Home";
import Service from "./pages/Service";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TranslateComponent from "./components/TranslateComponent";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="services" element={<Service />} />
          <Route exact path="profile" element={<Profile />} />
          <Route path="/translate" element={<TranslateComponent />} />
        </Routes>
      </Router>

      {/* <Home /> */}
      {/* <Service /> */}
    </>
  );
}

export default App;
