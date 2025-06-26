import { useState } from "react";

function PersonList() {
  const [data, setData] = useState([
    { id: 1, name: "AbuHamid", gender: "Man" },
    { id: 2, name: "Farah", gender: "Girl" },
    { id: 3, name: "Sir", gender: "Man" },
  ]);
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>Totall People : {data.length}</h1>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      <ol>
        {show &&
          data.map((person) => <li key={person.id}>Name: {person.name}</li>)}
      </ol>
    </div>
  );
}

export default PersonList;
