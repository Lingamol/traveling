import styled from "@emotion/styled";
import { colors, media } from "../../styles/stylesLayout";
export const FooterOverlay = styled.footer`
  outline: 2px solid yelow;
  padding-top: 30px;
  padding-bottom: 30px;
  background: ${colors.banerBackground};
`;
export const FooterFlex = styled.div`
  display: flex;
  flex-direction: column;

  ${media.desktop} {
    flex-direction: row;
    align-items: baseline;
    justify-content: space-evenly;
  }
`;
export const FooterTab = styled.div`
  display: flex;
  flex-direction: column;
  ${media.tabletAndDesktop} {
    flex-direction: row;
    align-items: baseline;
    justify-content: space-evenly;
    margin-bottom: 60px;
  }
  ${media.desktop} {
    margin-bottom: 0;
  }
`;
export const FooterContacts = styled.div`
  text-align: center;
  /* @media screen and(min-width:1200px) { */
  ${media.desktop} {
    text-align: left;
    flex-grow: 1;
    margin-right: 70px;
  }
  /* @media screen and(max-width:767px) { */
  ${media.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
