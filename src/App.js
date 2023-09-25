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

//import ProfilePage1 from "./components/Profile-Pages/profile1"
import ProfilePage2 from "./components/Profile-Pages/profile2"
import ProfilePage3 from "./components/Profile-Pages/profile3"

import SearchData from "./pages/SearchData";
import VerificationPage from "./pages/VerificationPage";
import DelhiService from "./pages/StateService";
import ServicesCateg from "./pages/ServicesCateg"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/services" element={<Service />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route path="/templates" element={<Templates/>} />
            
         {/* <Route path="/profile1" element={<ProfilePage1/>} />*/}
          <Route path="/profile2" element={<ProfilePage2/>} />
          <Route path="/profile3" element={<ProfilePage3/>} />
           <Route path="/year-gap" element={<YearGapDocument />} />
           
          <Route path="/vehicle-registration" element={<VehicleRegistrationDocument />} />
          <Route path="/death-certificate" element={<DeathCertificateDocument />} />
          <Route path="/change-name" element={<ChangeInName />} />
          <Route path="/regular-bail" element={<AppliForBail />} />
          <Route path="/loggedinuser" element={<ClientLogin />} />
          <Route path="/searches-criminal" element={<SearchData toSearch="Criminal..."/>} />
          <Route path="/searches-divorce" element={<SearchData toSearch="Divorce..."/>} />
          <Route path="/verification" element={<VerificationPage/>} />
          <Route path="/delhiserives" element={<DelhiService/>} />
          <Route path="/solopractitioners" element={<ServicesCateg/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
