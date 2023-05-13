import axios from "axios";
import { useState } from "react";
import "./App.css";
import { Box, Butao, List } from "./App.style";

export function App() {
  const [person, setPerson] = useState({});

  const [name, setName] = useState({});

  async function handleGet() {
    const data = await axios.get("https://randomuser.me/api/");

    setPerson(() => data.data.results[0]);

    console.log(data.data.results[0]);
    console.log(data.data.results[0].name.first);

    setName = data.data.results[0].name.first;
  }
  return (
    <div>
      <List>
        <Box>
          <p>Hello 1</p>
          <p>{name}</p>
        </Box>
      </List>
      <Butao>
        <button onClick={handleGet}>request </button>
      </Butao>
    </div>
  );
}
