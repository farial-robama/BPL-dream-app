import { Suspense } from "react";
import "./App.css";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";
import Navbar from "./Components/Navbar/Navbar";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch('/players.json')
  return res.json()
}


function App() {
  const playersPromise = fetchPlayers()
  return (
    <>
      <Navbar></Navbar>

      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>

      <SelectedPlayers></SelectedPlayers>
    </>
  );
}

export default App;
