import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import useMatchMedia from "../../hooks/use-match-media";
import AppBar from "../AppBar";
import Logo from "../Logo";

import Trips from "../../pages/Trips";

import { useState } from "react";
import {
  Button,
  HeaderBurger,
  Nav,
  NavLinkMenu,
  NavLinkMenuBurger,
  NavMobile,
} from "./Navigation.styled";

const Burger = {
  transform: "translateY(0%)",
};

const Navigation = () => {
  const { isTablet, isMobile } = useMatchMedia();
  const [nav, setNav] = useState(false);
  const handleChangeNav = (nav) => {
    setNav(!nav);
  };

  const changeNav = () => {
    setNav(!nav);
  };

  if (isTablet) {
    return (
      <Nav>
        <Button>
          <NavLinkMenuBurger onClick={changeNav}>
            <GiHamburgerMenu size={30} color={"#000"} />
          </NavLinkMenuBurger>
        </Button>
        {nav ? (
          <NavMobile style={Burger}>
            <HeaderBurger>
              <Logo />
              <GrFormClose size={40} color={"#000"} onClick={changeNav} />
            </HeaderBurger>
            <NavLinkMenu to="/news" onClick={changeNav}>
              News
            </NavLinkMenu>
            <NavLinkMenu to="/trips" onClick={changeNav}>
              Trips
            </NavLinkMenu>
            <NavLinkMenu to="/calendar" onClick={changeNav}>
              Calendar
            </NavLinkMenu>
            <NavLinkMenu to="/friends" onClick={changeNav}>
              Our friends
            </NavLinkMenu>
          </NavMobile>
        ) : (
          <NavMobile>
            <NavLinkMenu to="/news">News</NavLinkMenu>
            <NavLinkMenu to="/trips" component={<Trips />}>
              Trips
            </NavLinkMenu>
            <NavLinkMenu to="/friends">Our friends</NavLinkMenu>
          </NavMobile>
        )}
      </Nav>
    );
  } else if (isMobile) {
    return (
      <Nav>
        <Button>
          <NavLinkMenuBurger onClick={changeNav}>
            <GiHamburgerMenu size={30} color={"#000"} />
          </NavLinkMenuBurger>
        </Button>
        {nav ? (
          <NavMobile style={Burger}>
            <HeaderBurger>
              <Logo />
              <GrFormClose size={40} color={"#000"} onClick={changeNav} />
            </HeaderBurger>
            <AppBar onClick={handleChangeNav} />
            <NavLinkMenu to="/news" onClick={changeNav}>
              News
            </NavLinkMenu>
            {/* <NavLinkMenu
              to="/notices"
              component={<NoticesCategoriesNav />}
              onClick={handleChangeNav}
            >
              Find pet
            </NavLinkMenu> */}
            <NavLinkMenu to="/friends" onClick={changeNav}>
              Our friends
            </NavLinkMenu>
          </NavMobile>
        ) : (
          <NavMobile>
            <NavLinkMenu to="/news">News</NavLinkMenu>
            <NavLinkMenu to="/trips" component={<Trips />}>
              Trips
            </NavLinkMenu>
            <NavLinkMenu to="/friends">Our friends</NavLinkMenu>
          </NavMobile>
        )}
      </Nav>
    );
  } else {
    return (
      <>
        {isTablet || isMobile ? (
          <Nav>
            <Button>
              <NavLinkMenuBurger onClick={changeNav}>
                <GiHamburgerMenu size={30} color={"#000"} />
              </NavLinkMenuBurger>
            </Button>
            {nav ? (
              <NavMobile style={Burger}>
                <HeaderBurger>
                  <Logo />
                  <GrFormClose size={40} color={"#000"} onClick={changeNav} />
                </HeaderBurger>
                <NavLinkMenu to="/news" onClick={changeNav}>
                  News
                </NavLinkMenu>
                <NavLinkMenu
                  to="/trips"
                  component={<Trips />}
                  onClick={changeNav}
                >
                  Find pet
                </NavLinkMenu>
                <NavLinkMenu to="/friends" onClick={changeNav}>
                  Our friends
                </NavLinkMenu>
              </NavMobile>
            ) : (
              <NavMobile>
                <NavLinkMenu to="/news">News</NavLinkMenu>
                <NavLinkMenu to="/trips" component={<Trips />}>
                  Trips
                </NavLinkMenu>
                <NavLinkMenu to="/friends">Our friends</NavLinkMenu>
              </NavMobile>
            )}
          </Nav>
        ) : (
          <Nav>
            <NavLinkMenu to="/news">News</NavLinkMenu>
            <NavLinkMenu to="/trips" component={<Trips />}>
              Trips
            </NavLinkMenu>
            <NavLinkMenu to="/calendar" component={<Trips />}>
              Calendar
            </NavLinkMenu>
            <NavLinkMenu to="/Search" component={<Trips />}>
              Search
            </NavLinkMenu>
            <NavLinkMenu to="/friends">Our friends</NavLinkMenu>
          </Nav>
        )}
      </>
    );
  }
};

export default Navigation;
