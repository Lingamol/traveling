import Address from "../Address/Address";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import Social from "../Social/Social";
import Subscribe from "../Subscribe/Subscribe";
import {
  FooterContacts,
  FooterFlex,
  FooterOverlay,
  FooterTab,
} from "./Footer.styled";

const Footer = () => {
  return (
    <FooterOverlay>
      <Container>
        <FooterFlex>
          <FooterTab>
            <FooterContacts>
              <Logo />
              <Address />
            </FooterContacts>
            <Social />
          </FooterTab>
          <Subscribe />
        </FooterFlex>
      </Container>
    </FooterOverlay>
  );
};
export default Footer;
