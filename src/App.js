import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";

import {Routes,Route} from "react-router-dom";



const App = () =>{

  return(
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a" element={<About />} />
        <Route path="/b" element={<Blog />} />
        <Route path="/c" element={<Contact />} />

      </Routes>
    </div>
  )
}

export default App;
