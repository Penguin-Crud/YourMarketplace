import { useEffect, useState } from "react";
import { getAllGames } from "../services/gameService";
import { GameCard } from "./GameCard";

export function GameList() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    getAllGames().then((gamesData) => setGames(gamesData));
  });
  return (
    <ul>
      <li>
        {games.map((game) => (
          <GameCard game={game} />
        ))}
      </li>
    </ul>
  );
}
