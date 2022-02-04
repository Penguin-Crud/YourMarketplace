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
    <header className={Style.navbar}>
      <div>
        <p>Marketplace</p>
        <p>My Marketplace</p>
      </div>
      <nav class={Style.hiddenMenu}>
        <ul>
          <li>
            <a href="#">
              <img
                className={Style.avatar}
                src={seller.avatar}
                alt={seller.name}
              ></img>
              <p>{seller.name}</p>
            </a>
            <ul>
              <li>
                <a href="#">My Profile</a>
              </li>
              <li>
                <a href="#">Logout</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
