export function GameCard(props) {
  return (
    <div>
      <div>{props.game.name}</div>
      <div>
        <img src={props.game.img} alt={"alt :" + props.game.name} />
      </div>
    </div>
  );
}
