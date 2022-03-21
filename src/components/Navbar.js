import dp from "../dp.JPG";

import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <header>
      <h1><img src={dp} alt="LOGO" /> TJ WEBDEV</h1>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/blogs">BLOGS</Link>
        <Link to="/about">ABOUT</Link>
      </nav>
    </header>
  )
}
