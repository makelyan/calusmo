import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import OurTeam from "./pages/OurTeam";
import NoPage from "./pages/NoPage";
import Resources from "./pages/Resources";
import JoinUs from "./pages/JoinUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
