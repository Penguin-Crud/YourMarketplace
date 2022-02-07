import { useEffect, useState } from "react";
import { getAllGames } from "../services/gameService";
import { GameCard } from "./GameCard";
import Style from "../styles/gameList.module.css";

export function GameList() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    getAllGames().then((gamesData) => setGames(gamesData));
  });
  return (
    <div className={Style.container}>
        {games.map((game) => (
          <GameCard game={game} />
        ))}
    </div> 
  );
}
