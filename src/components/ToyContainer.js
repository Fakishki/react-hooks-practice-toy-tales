import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, setToys, onDeleteToy, onUpdateToy }) {
  return (
    <div id="toy-collection">
      {toys.map((toy) => (
        <ToyCard key={toy.id} toy={toy} onDeleteToy={onDeleteToy} onUpdateToy={onUpdateToy} />
        ))}
    </div>
  );
}

export default ToyContainer;
