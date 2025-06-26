import "./Components.css";

const bakeryItems = [
  {
    id: 1,
    name: "Baking",
    price: 2.5,
    description: "Flaky, buttery French pastry.",
  },
  {
    id: 2,
    name: "Bread",
    price: 3.0,
    description: "Classic French bread with a crisp crust.",
  },
  {
    id: 3,
    name: "Cake",
    price: 4.5,
    description: "Rich and moist chocolate cake.",
  },
  {
    id: 4,
    name: "Cookie-Cream",
    price: 2.8,
    description: "Sweet roll with cinnamon and icing.",
  },
  {
    id: 5,
    name: "Cookie",
    price: 2.4,
    description: "Soft muffin filled with blueberries.",
  },
];

const Products = () => (
  <div>
    <h2>Bakery Items</h2>
    <section className="items">
      <ul>
        {bakeryItems.map((item) => (
          <li>
            <h3>
              {item.name} - ${item.price.toFixed(2)}
            </h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

export default Products;
