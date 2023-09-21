
import "./App.css";
import Home from "./pages/Home";
import Service from "./pages/Service";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TranslateComponent from "./components/TranslateComponent";

function App() {
  async function query(data) {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: "Bearer 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",
        "Content-Type": "application/json", // Specify content type
      },
      body: JSON.stringify({ inputs: data }), // Wrap data in an object
    });

    const result = await response.json();
    return JSON.stringify(result);

  }
  return (
    <>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="services" element={<Service />} />
            <Route path="/translate" element={<TranslateComponent />}/>
          </Routes>
        </Router>

      {/* <Home /> */}
      {/* <Service /> */}
   
    </>
  );
}

export default App;
