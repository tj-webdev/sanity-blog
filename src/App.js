import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import About from "./components/About";
import Blog from "./components/Blog";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/blogs/:slug" element={<Blog/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/*" element={<h1>Woops! Incorrect URL</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
