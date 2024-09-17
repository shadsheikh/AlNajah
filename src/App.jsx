import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Sb from "./components/scrollbtn/Sb";
import Courses from "./components/courses/Courses";
import Contact from "./components/contact/Contact";
import Notfound from "./components/notfound/Notfound";

function App() {
  return (
    <BrowserRouter>
      <>
        <Sb />
        <div className="_navbar">
          <Navbar />
        </div>

        <div className="_body">
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/alnajah" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses/*" element={<Courses />} />
            <Route path="/registration" element={<Contact />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>

        <div className="_footer">
          <Footer />
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
