const bakeryItems = [
  {
    id: 1,
    name: "Croissant",
    price: 2.5,
    description: "Flaky, buttery French pastry.",
  },
  {
    id: 2,
    name: "Baguette",
    price: 3.0,
    description: "Classic French bread with a crisp crust.",
  },
  {
    id: 3,
    name: "Chocolate Cake",
    price: 4.5,
    description: "Rich and moist chocolate cake.",
  },
  {
    id: 4,
    name: "Cinnamon Roll",
    price: 2.8,
    description: "Sweet roll with cinnamon and icing.",
  },
  {
    id: 5,
    name: "Blueberry Muffin",
    price: 2.2,
    description: "Soft muffin filled with blueberries.",
  },
];

const Products = () => (
  <div>
    <h2>Bakery Items</h2>
    <ul>
      {bakeryItems.map((item) => (
        <li key={item.id}>
          <h3>
            {item.name} - ${item.price.toFixed(2)}
          </h3>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Products;
