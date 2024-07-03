import "./navbar.css";

function Navbar({ onClick }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          VASANTH PANDIYAN 
        </a>
        <button className="nav-links" onClick={onClick}>
          Add New Card
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
