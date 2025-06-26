import baking from "../assets/baking.svg";
import bread from "../assets/bread.svg";
import cake from "../assets/cake.svg";
import cookieCream from "../assets/cookie-cream.svg";
import cookie from "../assets/cookie.svg";

import { useState } from "react";

function ProductLists() {
  const [data, setData] = useState([
    { id: 1, name: "baking", image: baking },
    { id: 2, name: "bread", image: bread },
    { id: 3, name: "cake", image: cake },
    { id: 4, name: "cookie-cream", image: cookieCream },
    { id: 5, name: "cookie", image: cookie },
  ]);
  const [show, setShow] = useState(true);
  return (
    <div>
      <p>Totall Products : {data.length}</p>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      <ol>
        {show &&
          data.map((Product) => (
            <li>
              {Product.image && (
                <img src={Product.image} alt={Product.name} width="25" />
              )}
              {Product.name}
            </li>
          ))}
      </ol>
    </div>
  );
}

export default ProductLists;
