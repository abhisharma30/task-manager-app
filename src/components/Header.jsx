import "../styles/Header.css";
import logo from "../assets/VoltBlue.svg";

const Header = () => {
  return (
    <div className="header px-4">
      <img src={logo} alt="Logo" className="logo" />
      <h1 className="header-text">Task Manager Application</h1>
    </div>
  );
};

export default Header;
