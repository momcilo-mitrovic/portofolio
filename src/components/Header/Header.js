import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <header className="Header-header">
        <h1>Momcilo Mitrovic</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
