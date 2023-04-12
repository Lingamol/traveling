import { NavLink } from "react-router-dom";
import logoImg from "../../img/logo.png";
import { FirstWord, LogoWord, SecondWord } from "./Logo.styled";

const Logo = () => {
  return (
    <div>
      <NavLink to="/">
        {/* <img src={logoImg} alt="travel" width="30" height="30" /> */}
        <LogoWord>
          <FirstWord>Happy</FirstWord>
          <SecondWord>Trip</SecondWord>
        </LogoWord>
      </NavLink>
    </div>
  );
};

export default Logo;
