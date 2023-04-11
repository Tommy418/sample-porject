import { Routes, Route, Link, NavLink } from "react-router-dom";
import Navbar from "./views/components/Navbar";
import Contact from "./views/pages/Contact";
import Home from "./views/pages/Home";
import Services from "./views/pages/Services";
import Story from "./views/pages/Story";


const App = (props) => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/story' element={<Story />} />
      </Routes>



    </div>

  );
};

export default App;