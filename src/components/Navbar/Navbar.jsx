import "./Navbar.css";
import logo from "./../../assets/logo.png";
import arrow_icon from "./../../assets/arrow_icon.png";
import { useContext } from "react";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd": {
        setCurrency({
          name: "usd",
          symbol: "$",
        });
        break;
      }
      case "eur": {
        setCurrency({
          name: "eur",
          symbol: "€",
        });
        break;
      }
      case "vnd": {
        setCurrency({
          name: "vnd",
          symbol: "VND",
        });
        break;
      }
      default: {
        setCurrency({
          name: "usd",
          symbol: "$",
        });
        break;
      }
    }
  };
  return (
    <div className="navbar">
      <Link to={"/"}>
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="vnd">VND</option>
        </select>
        <button>
          Sign up <img src={arrow_icon} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
