
import "./App.css";
import Home from "./pages/Home";
import Service from "./pages/Service";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DocumentCreate from "./pages/DocumentCreate";

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="services" element={<Service />} />
            <Route path="/templates" element={<DocumentCreate/>}/>
          </Routes>
        </Router>

      {/* <Home /> */}
      {/* <Service /> */}
   
    </>
  );
}

export default App;
