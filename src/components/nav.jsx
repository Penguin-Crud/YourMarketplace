import Style from "../styles/nav.module.css";
import StyleImg from "../styles/landing.module.css";
import { Landing } from "./Landing";
import { getAllUsers } from "../services/gameService";
import { useEffect, useState } from "react";

export function Nav() {

  const [seller, setSeller] = useState([]);
  
  useEffect(() => {
    getAllUsers().then((sellerData) => 
      setSeller(sellerData[0])
    );
  });
  return (
    <div className={Style.navbarFather}>
      <div className={StyleImg.fondo1}></div>
      <div className={Style.containerMain}>
        <header className={Style.navbar}>
          <div>
            <img className={Style.menu} src="../../assets/img/burger2.svg" alt="burger" />
            <p>Marketplace</p>
          </div>
          <nav className={Style.hiddenMenu}>
            <ul>
              <li>
                <a href="#">
                  <img
                    className={Style.avatar}
                    src={seller.avatarSeller}
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
        <Landing />
      </div>
      <div className={StyleImg.fondo2}></div>
    </div>
  );
}
