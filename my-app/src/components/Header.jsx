function Header() {
  return (
    <header>
      <nav>
        <ul
          style={{
            display: "flex",
            textd: "none",
            listStyle: "none",
            justifyContent: "space-around",
            gap: "1rem",
            margin: 0,
            padding: 20,
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(43, 36, 36, 0.8)",
            boxShadow: "0 2px 10px rgba(0, 0,0, 0.1)",
            borderRadius: "8px",
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
