import "./App.css";
import Home from "./pages/Home";
import Service from "./pages/Service";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Templates from "./pages/Templates";
import YearGapDocument from "./documents/YearGap";
import VehicleRegistrationDocument from "./documents/VehicleRegistr";
import DeathCertificateDocument from "./documents/DeathCertif";
import ChangeInName from "./documents/ChangeInName";
import AppliForBail from "./documents/AppliForBail";
import ClientLogin from "./pages/ClientLogin";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="services" element={<Service />} />
          <Route exact path="profile" element={<Profile />} />
          <Route path="/templates" element={<Templates/>} />
           <Route path="/year-gap" element={<YearGapDocument />} />
          <Route path="/vehicle-registration" element={<VehicleRegistrationDocument />} />
          <Route path="/death-certificate" element={<DeathCertificateDocument />} />
          <Route path="/change-name" element={<ChangeInName />} />
          <Route path="/regular-bail" element={<AppliForBail />} />
          <Route path="/loggedinuser" element={<ClientLogin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
