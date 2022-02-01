import Style from "../styles/nav.module.css";

function Nav() {
  return (
    <nav className="navbar">
      <p>Marketplace</p>
      <p>My Marketplace</p>
      <button>
        <img src="../assets/default-user-image.png" alt="" srcset="" />
      </button>
    </nav>
  );
}

export default Nav;
