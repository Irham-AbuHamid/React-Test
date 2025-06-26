import { useState } from "react";

function ProductLists() {
  const [data, setData] = useState([
    { id: 1, name: "Croissant" },
    { id: 2, name: "Baguette" },
    { id: 3, name: "Chocolate" },
    { id: 3, name: "Cinnamon" },
    { id: 3, name: "Blueberry Muffin" },
  ]);
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>Totall Products : {data.length}</h1>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      <ol>
        {show && data.map((person) => <li key={person.id}>{person.name}</li>)}
      </ol>
    </div>
  );
}

export default ProductLists;
