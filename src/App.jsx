// import {
//   BrowserRouter as Router,
//   Outlet,
//   Route,
//   Routes,
// } from "react-router-dom";
// import VerifyCert from "./components/VerifyCert";
// import CreateCert from "./components/CreateCert";
// import MintNFT from "./components/MintNFT";
import Navbar from "./components/Navbar";
// import Home from "./components/Home";
import Hero from "./components/Hero";
import About from "./components/About";
import How from "./components/How"

function App() {
  return (
    <div>
      {/* <Router> */}
        <Navbar />
        <Hero />
        <How />
        <About />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mint" element={<MintNFT />} />
          <Route path="/verify" element={<VerifyCert />} />
          <Route path="/create" element={<CreateCert />} />
        </Routes>
        <Outlet />
      </Router> */}
    </div>
  );
}

export default App;
