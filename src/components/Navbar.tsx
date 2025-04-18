import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { NAV_LINKS } from "../constants";

function Navbar() {
  const { pathname } = useLocation();
  const [showNav, setShowNav] = useState<boolean>(false);

  const toggleNav: () => void = () => setShowNav((prev) => !prev);

  return (
    <nav>
      <Link to="/">
        <div className="logo">
          <img src="/assets/shared/logo.svg" alt="space-tourism-logo" />
        </div>
      </Link>
      <div className="line">
        <img src="/assets/shared/line.png" alt="space-tourism-logo" />
      </div>
      <ul className={showNav ? "active" : ""}>
        <div className="close-icon" onClick={toggleNav}>
          <img src="/assets/shared/icon-close.svg" alt="close-menu" />
        </div>
        {NAV_LINKS.map(({ name, to }) => (
          <li
            key={name}
            style={{ listStyle: "none" }}
            className={pathname === to ? "active" : undefined}
            onClick={toggleNav}
          >
            <Link to={to}>
              <span style={{ fontWeight: "bold" }}>{name.split(" ")[0]}</span>{" "}
              {name.split(" ")[1]}
            </Link>
          </li>
        ))}
      </ul>
      <div className="menu" onClick={toggleNav}>
        <img src="/assets/shared/icon-hamburger.svg" alt="hambugger-menu" />
      </div>
    </nav>
  );
}

export default Navbar;
