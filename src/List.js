import { ListBox, Item, Section } from "@adobe/react-spectrum";
import React from "react";
function Example() {
  let options = [
    { id: 1, name: "Aardvark" },
    { id: 2, name: "Cat" },
    { id: 3, name: "Dog" },
    { id: 4, name: "Kangaroo" },
    { id: 5, name: "Koala" },
    { id: 6, name: "Penguin" },
    { id: 7, name: "Snake" },
    { id: 8, name: "Turtle" },
    { id: 9, name: "Wombat" }
  ];
  let [animalId, setAnimalId] = React.useState();

  return (
    <>
      <ListBox
        width="size-2400"
        aria-label="Animals"
        items={options}
        selectionMode="single"
        onSelectionChange={setAnimalId}
      >
        {(item) => <Item>{item.name}</Item>}
      </ListBox>
      <p>Animal id: {animalId}</p>
    </>
  );
}

export default Example;
