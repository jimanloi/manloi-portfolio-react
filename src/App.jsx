import Navbar from "./components/Navbar";
import HeroContent from "./components/HeroContent";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import MyWorks from "./pages/myWorks";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/manloi-portfolio-react">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroContent />
              <MainContent />
            </>
          }
        ></Route>
        <Route path="/works" element={<MyWorks />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
