import Style from "../styles/nav.module.css";
import { getAllGames } from "../services/gameService";
import { useEffect, useState } from "react";

export function Nav() {
  const [seller, setSeller] = useState([]);
  useEffect(() => {
    getAllGames().then((sellerData) =>
      setSeller({
        name: sellerData[0].seller,
        avatar: sellerData[0].avatarSeller,
      })
    );
  });
  return (
    <nav className={Style.navbar}>
      <div>
        <p>Marketplace</p>
        <p>My Marketplace</p>
      </div>
      <div>
        <img className={Style.avatar}src={seller.avatar} alt={seller.name}></img>
        <p>{seller.name}</p>
      </div>
    </nav>
  );
}
