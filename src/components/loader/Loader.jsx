import "./loader.css";
import logo from "../../assets/img/mohazizzi_logo.png";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader_container">
        <div className="loader_circle"></div>
      </div>
      <img className="loader_img" src={logo} alt="logo" />
    </div>
  );
};

export default Loader;
