import "./App.css";
import { Home } from "./home/home";
import { Nav } from "./home/nav/nav";
import { useState } from "react";

function App() {
  const [trigger, setTrigger] = useState("");

  return (
    <>
      <div className=" flex flex-wrap w-full h-screen justify-center items-center">
        <Nav select={setTrigger} />
        <Home selectname={trigger} />
      </div>
    </>
  );
}

export default App;
