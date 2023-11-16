import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Services from "./pages/Services.js";
import About from "./pages/About.js";
import Single from "./pages/Single.js";
import Navbar from "./pages/Navbar.js";
import Contact from './pages/Contact.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Single />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
