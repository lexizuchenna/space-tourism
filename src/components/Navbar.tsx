import { Link } from "react-router-dom";

function Navbar() {
  const nav_links = [
    { name: "00 HOME", to: "/" },
    { name: "00 DESTINATION", to: "/destination" },
    { name: "00 CREW", to: "/crew" },
    { name: "00 TECHNOLOGY", to: "/technology" },
  ];
  return (
    <nav style={{ zIndex: 10 }}>
      <div
        className="logo"
        style={{
          width: "100%",
          padding: "10px 25px",
        }}
      >
        <img src="/assets/shared/logo.svg" alt="space-tourism-logo" />
      </div>
      <div className="line"></div>
      <ul>
        {nav_links.map(({ name, to }) => (
          <li key={name}>
            <Link to={to}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
