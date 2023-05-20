import { useState } from "react";
import { api, server } from "./api/axios/axios";

export default function App() {
  const [dataRequest, setDataRequest] = useState("");

  async function handleButton() {
    console.log("função");

    const resultAPI = await api.get("/");

    const user = resultAPI.data.results[0];

    const nomeFull = `${user.name.first} ${user.name.last}`;

    setDataRequest(nomeFull);
    const resultSERVER = await server.post("user/", {
      name: nomeFull,
      End: "xxx",
      CEP: "xxx",
      CPF: "xxx",
      saldo: 0,
      transacao: [],
    });

    console.log(resultSERVER);
  }
  return (
    <div
      className="
    bg-zinc-800
    h-screen
    flex
    justify-center
    items-center
    "
    >
      <div
        className={`
      bg-slate-500
      w-60
      h-72
      text-center
      border-x-sky-300
      rounded-2xl
      flex-col
      space-y-5

      `}
      >
        <h1 className="text-white">Hello world!</h1>
        <button
          className="bg-slate-600 text-white p-2 rounded-2xl"
          onClick={handleButton}
        >
          Request
        </button>
        <p>---------------------------</p>
        <p>{dataRequest}</p>
      </div>
    </div>
  );
}
