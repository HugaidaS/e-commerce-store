import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.scss";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";
import { CartContext } from "../../contexts/cartContext";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isOpened } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <div>
            <Logo />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to={"/auth"}>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isOpened && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
