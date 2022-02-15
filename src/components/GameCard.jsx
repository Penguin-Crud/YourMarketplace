import { Link } from "react-router-dom"

export function GameCard(props) {
  return (
    <Link to={`/product/${props.game.id}`} className="card">
      {console.log(props.game.id)}
      <div className="card-header">
        <img src={props.game.img} alt={props.game.name} />
      </div>
      <div className="card-plataform">
          <a className="tag tag-red">{props.game.console}</a>
      </div>
      <div className="card-content">
          <div className="info-game displace">{props.game.name}</div>
          <div className="info-game displace">Arcade/Racing</div>
          <div className="info-game displace">
              <p>{props.game.description}</p>
          </div>
      </div>
      <div className="card-actions">
        <button className="buttons enlarge">
            <img className= "carrito" src="../../assets/img/carrito2.svg" alt="carrito" />
            {props.game.price}€ Buy
        </button>
      </div>
      <div className="user">
        <img src= {props.user.avatarSeller} alt="user" />
        <div className="user-info">
        <h5>{props.user.name}</h5>
        </div>
      </div>
    </Link>
  );
}
