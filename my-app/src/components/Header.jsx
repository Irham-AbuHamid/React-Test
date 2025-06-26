function Header() {
  return (
    <header>
      <nav
        style={{
          margin: 0,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          fontSize: "1.2rem",
        }}
      >
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            justifyContent: "space-around",
            margin: 0,
            padding: "1rem 0",
          }}
        >
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
