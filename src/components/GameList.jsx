import { useEffect, useState } from "react";
import { getAllGames } from "../services/gameService";
import { GameCard } from "./GameCard";
import Style from "../styles/gameList.module.css";

export function GameList() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    // getAllGames().then((gamesData) => console.log(gamesData));
    getAllGames().then(resp => setGames(resp))
  });
  return (
    <div className={Style.container}>
        {games.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
    </div> 
  );
}
