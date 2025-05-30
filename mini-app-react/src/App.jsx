import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Products } from "./pages/Products.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { Footer } from "./components/Footer.jsx";

export function App() {

  return (

    <>
      <header>
        <NavBar />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      <Footer />
    </>
  )
}

