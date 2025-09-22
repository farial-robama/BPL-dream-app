import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";
import Navbar from "./Components/Navbar/Navbar";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch('/players.json')
  return res.json()
}


function App() {
  const[toggle, setToggle] = useState(true)
  const playersPromise = fetchPlayers()
  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <h3 className="font-bold text-2xl">Available Players</h3>
        <div className="font-bold">
          <button onClick={()=>setToggle(true)} className={`px-4 py-3 border-2 border-gray-200 rounded-l-xl border-r-0 ${toggle === true ? "bg-lime-200" : ""}`}>Available</button>
          <button onClick={()=>setToggle(false)} className={` px-4 py-3 border-2 border-gray-200 rounded-r-xl border-l-0 ${toggle === false ? "bg-lime-200" : ""}`}>Selected <span>0</span></button>
        </div>

      </div>

      {
        toggle === true? <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense> : <SelectedPlayers></SelectedPlayers>
      }

      
    </>
  );
}

export default App;
