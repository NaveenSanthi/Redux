import classes from "./Header.module.css";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux";
import { authAution } from "../store/auth";
const Header = () => {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(authAution.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {auth && (
            <li>
              <a href="/">My Products</a>
            </li>
          )}
          {auth && (
            <li>
              <a href="/">My Sales</a>
            </li>
          )}
          {auth && (
            <li>
              <button onClick={logOutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
