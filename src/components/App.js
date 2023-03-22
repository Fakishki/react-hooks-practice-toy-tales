import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  // const [likes, setLikes] = useState(toy.likes);

  // when submitting a new toy takes current state of name & image
  function handleSubmit(e) {
    e.preventDefault();
    const toyData = {
      name: name,
      image: image,
      likes: 0,
    }
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(toyData),
    })
      .then((r) => r.json())
      .then((newToy) => updateToys(newToy));
  }

// adds the new toy to the webpage
  function updateToys(toyToAdd) {
    setToys([...toys, toyToAdd])
  }

  // when application loads pulls in original array of toys
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then((toys) => setToys(toys));
  }, []);
  

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleDeleteToy(toyToDelete) {
    const updatedToys = toys.filter((toy) => toy.id !== toyToDelete.id);
    setToys(updatedToys);
  }

  function handleUpdateToy(updatedToy) {
    const updatedToys = toys.map((toy) =>
    toy.id === updatedToy.id ? updatedToy : toy
    )
    setToys(updatedToys);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm name={setName} image={setImage} onHandleSubmit={handleSubmit} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        toys={toys} 
        setToys={setToys}
        onDeleteToy={handleDeleteToy}
        onUpdateToy={handleUpdateToy}
      />
    </>
  );
}

export default App;
