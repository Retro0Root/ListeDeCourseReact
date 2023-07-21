import { useState } from "react";

function App() {
  //state ((état données))
  let [panier, setPanier] = useState([
    { id: "banane", qty: 0 },
    { id: "poire", qty: 0 }
  ]);

  //comportement
  const handleclick = (id) => {
    const panierCopy = [...panier];
    panierCopy[id].qty = panierCopy[id].qty + 1;
    setPanier(panierCopy);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //ajout du nouveau fruit
    const panierCopy = [...panier];
    panierCopy.push({
      id: event.target.name.value,
      qty: parseInt(event.target.qty.value)
    });
    setPanier(panierCopy);
  };

  //affichage (render)
  return (
    <div>
      <h1>Liste de fruits </h1>
      <p>Mes produits : </p>
      <ul>
        {Object.keys(panier).map((key) => {
          return (
            <li>
              {panier[key].id} - Quantité : {panier[key].qty} |{" "}
              <button onClick={() => handleclick(key)}>Ajouter un fruit</button>
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          id="name"
          name="name"
          type={"text"}
          placeholder={"Veuillez saisir un fruit"}
        ></input>{" "}
        <input
          id="qty"
          name="qty"
          type={"number"}
          placeholder={"Quantité"}
        ></input>{" "}
        <button>Ajouter le fruit</button>
      </form>
    </div>
  );
}

export default App;
