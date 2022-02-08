export function GameCard(props) {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <img src={props.game.img} alt={props.game.name} />
        </div>
        <div className="card-plataform">
            <a className="tag tag-red">{props.game.console}</a>
        </div>
        <div className="card-content">
            <div className="info-game displace">{props.game.name}</div>
            {/* <div className="info-game displace">Arcade/Racing/Multiplayer</div> */}
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
      </div>
    </div> 
  );
}
