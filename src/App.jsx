import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Sb from "./components/scrollbtn/Sb";
import Courses from "./components/courses/Courses";
import Addmission from "./components/addmission/Addmission";
import Notfound from "./components/notfound/Notfound";
import ContactUS from "./components/contact/ContactUS";

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
            <Route path="/addmission" element={<Addmission />} />
            <Route path="/contact" element={<ContactUS />} />
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
