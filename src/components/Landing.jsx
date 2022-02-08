import { GameList } from "./GameList";
import Style from "../styles/landing.module.css"

export function Landing() {
  return (
      <div className={Style.containerFather} >
        <GameList />
      </div>
  );
}
