import LiveBackground from "./components/Background";
import { Navbar } from "./components/NavBar";

import { CustomCursor } from "./components/ui/cursor";

import { BrowserRouter as Router, Routes } from "react-router";
import { Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <div>
          <CustomCursor />
          <LiveBackground />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </main>
  );
}

export default App;
