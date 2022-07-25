import React from "react";
import { Provider, defaultTheme } from "@adobe/react-spectrum";
import "./styles.css";
import { ListBox, Item } from "@adobe/react-spectrum";
import { TabList, TabPanels, Tabs } from "@adobe/react-spectrum";

import List from "./List";

export default function App() {
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
    <Provider theme={defaultTheme} height="100%">
      <Tabs aria-label="History of Ancient Rome">
        <TabList>
          <Item key="FoR">Founding of Rome</Item>
          <Item key="MaR">Monarchy and Republic</Item>
          <Item key="Emp">Empire</Item>
        </TabList>
        <TabPanels>
          <Item key="FoR">
            <List />
          </Item>
          <Item key="MaR">Senatus Populusque Romanus.</Item>
          <Item key="Emp">Alea jacta est.</Item>
        </TabPanels>
      </Tabs>
    </Provider>
  );
}
