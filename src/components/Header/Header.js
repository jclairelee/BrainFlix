import { useNavigate, Link } from "react-router-dom";
import "./Header.scss";
import UploadBtn from "../../assets/icons/upload.svg";
import SearchIcon from "../../assets/icons/search.svg";
import Logo from "../../assets/logo/BrainFlix-logo.svg";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <Link to={"/"}>
        <div className="header-logo">
          <img src={Logo} className="header-logo__img" alt="BrainFlix-logo" />
        </div>
      </Link>
      <form
        onSubmit={() => {
          navigate(true);
        }}
        className="header-form"
      >
        <div className="header-search">
          <img
            src={SearchIcon}
            alt="search-Icon"
            className="header-search-icon"
          />
          <input
            type="text"
            className="header-search-bar"
            placeholder="Search"
          ></input>
        </div>
      </form>
      <div className="header-user">
        <div className="header-user__pic"></div>
      </div>
      <div className="header-btn-wrapper">
        <Link to={"/upload"} className="header-btn__link">
          <button className="header-btn">
            <img
              src={UploadBtn}
              className="header-upload__icon"
              alt="upload-icon"
            />
            UPLOAD
          </button>
        </Link>
      </div>
    </header>
  );
};
