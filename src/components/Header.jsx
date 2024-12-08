function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("open");
}

function Header() {
  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <div className="hamburger" onClick={toggleMenu}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>

            <a href="index.html">
              <h1>Hunger Apps</h1>
            </a>

            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="#explore">Explore</a>
              </li>
              <li>
                <a href="https://irfandwisamudra.netlify.app/" target="_blank">
                  About Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="nav-links">
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="#explore">Explore</a>
          </li>
          <li>
            <a href="https://irfandwisamudra.netlify.app/" target="_blank">
              About Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
