
import "./App.css";
import Home from "./pages/Home";
import Service from "./pages/Service";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="services" element={<Service />} />
          </Routes>
        </Router>

      {/* <Home /> */}
      {/* <Service /> */}
   
    </>
  );
}

export default App;
