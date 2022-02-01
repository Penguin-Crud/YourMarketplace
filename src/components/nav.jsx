import Style from "../styles/nav.module.css";
import img from "../assets/img/user.png";


export function Nav() {
  return (
    <nav className={Style.navbar}>
      <p>Marketplace</p>
      <p>My Marketplace</p>
        <img src="http://uxpanol.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png
" alt="no funciona" srcset="" />
    </nav>
  );
}
