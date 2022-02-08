export function GameCard(props) {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <img src={props.game.img} alt={props.game.name} />
        </div>
        <div className="card-plataform">
            <a className="tag tag-red">Nintendo Switch</a>
        </div>
        <div className="card-content">
            <div className="info-game displace">{props.game.name}</div>
            <div className="info-game displace">Arcade/Racing</div>
            <div className="info-game displace">
                <p>Progamdor, Profesor y Diseñador Web</p>
            </div>
        </div>
        <div className="card-actions">
          <button className="buttons enlarge">
              <img src="carro.png" alt="" />
              buy
          </button>
        </div>
        <div className="user">
          <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" />
          <div className="user-info">
            <h5>July Dec</h5>
            <small>2h ago</small>
          </div>
        </div>
      </div>
    </div> 
  );
}
