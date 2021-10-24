import "./Header.css";
import useDarkMode from "use-dark-mode";
import Toggle from "../../components/Toggle/Toggle";

function Header() {
  const darkMode = useDarkMode(false);

  return (
    <div className="Header">
      <div className="container">
        <header className="Header-header">
          <h1>Momcilo Mitrovic</h1>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
        </header>
      </div>
    </div>
  );
}

export default Header;
