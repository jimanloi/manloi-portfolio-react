import Navbar from "./components/Navbar";
import HeroContent from "./components/HeroContent";
import MainContent from "./components/MainContent";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MyWorks from "./components/pages/myWorks";
import MyStory from "./components/pages/MyStory";
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
        <Route path="/career-journey" element={<MyStory />}></Route>
        <Route path="/works" element={<MyWorks />}></Route>
      </Routes>
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
