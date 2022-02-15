import { GameList } from "./GameList";
import Style from "../styles/landing.module.css"
import { Nav } from "./Nav";
import StyleImg from "../styles/landing.module.css";

export function Landing() {
  return (
    <div className={Style.landingFather}>
      <div className={StyleImg.fondo1}></div>
      <div className={Style.containerFather} >
        <Nav />
        <GameList />
      </div>
      <div className={StyleImg.fondo2}></div>
    </div>  
  );
}
