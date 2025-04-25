import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="navbar-container">
        <div className="navlink">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/chi-siamo">Chi Siamo</NavLink>

          <NavLink to="/post"> Prodotti</NavLink>
        </div>
      </div>
    </>
  );
}
