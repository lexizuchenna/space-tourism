import { Link } from "react-router-dom";

import { NAV_LINKS } from "../constants";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src="/assets/shared/logo.svg" alt="space-tourism-logo" />
      </div>
      <div className="line">
        <img src="/assets/shared/line.png" alt="space-tourism-logo" />
      </div>
      <ul>
        {NAV_LINKS.map(({ name, to }) => (
          <li key={name} style={{ listStyle: "none" }}>
            <Link to={to}>
              <span style={{ fontWeight: "bold" }}>{name.split(" ")[0]}</span>{" "}
              {name.split(" ")[1]}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
