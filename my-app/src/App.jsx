// rafce -- React Arrow Function Component Export

import Header from "./components/Header.jsx";
import ProductLists from "./components/ProductLists.jsx";
import Products from "./components/Products.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="title">Bakery Shop</h1>
      <h2 className="subtitle">Freshly Baked Goods</h2>
      <h3 className="description">
        Explore our delicious range of bakery items
      </h3>
      <h4 className="tagline">Taste the tradition in every bite!</h4>
      <h5 className="footer-text">© 2023 Bakery Shop. All rights reserved.</h5>
      <h6 className="footer-note">Crafted with love by Your Bakery Team</h6>

      <h1>Welcome to Our Bakery</h1>
      <ProductLists />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
