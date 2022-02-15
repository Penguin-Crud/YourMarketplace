import { useEffect, useState } from "react";
import { getAllGames, getAllUsers } from "../services/gameService";
import { GameCard } from "./GameCard";
import Style from "../styles/gameList.module.css";

export function GameList() {
  const [games, setGames] = useState([]);
  const [seller, setSeller] = useState([]);

  useEffect(() => {
    getAllGames().then((resp) => setGames(resp));
    getAllUsers().then((sellerData) => setSeller(sellerData[0]));

    /* sellerData.map(user.id === game.seller_id) => ())
     ) */
  });
  return (
    <div className={Style.container}>
      {games.map(
        (game) => (
          /* console.log(seller.find(user => user.id === game.seller_id)), */
          <GameCard game={game} key={game.id} user={seller} />
        )
      )}
    </div>
  );
}
