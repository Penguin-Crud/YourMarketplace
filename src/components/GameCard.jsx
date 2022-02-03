export function GameCard(props) {
  return (
    <li>
      <div>{props.game.name}</div>
      <div>
        <img src={props.game.img} alt="" />
      </div>
    </li>
  );
}
