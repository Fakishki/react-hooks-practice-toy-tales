import React, { useState, useEffect } from "react";

function ToyForm({ name, image, onHandleSubmit }) {

  // handles the name and image change events

  function handleNameChange(event) {
    name(event.target.value)
  }

  function handleImageChange(event) {
    image(event.target.value)
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={onHandleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          // added to handle the change event
          onChange={handleNameChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          // added to handle the change event
          onChange={handleImageChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
