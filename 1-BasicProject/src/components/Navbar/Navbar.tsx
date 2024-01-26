import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="menu">
      <NavLink to={"/"}>Anasayfa</NavLink>
      <NavLink to={"/about"}>Hakkımızda</NavLink>
    </div>
  );
};

export default Navbar;
