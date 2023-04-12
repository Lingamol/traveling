import styled from "styled-components";
import { media, colors } from "../../styles/stylesLayout";
import { ReactComponent as Facebook } from "../../img/svg/facebook.svg";
import { ReactComponent as Instagram } from "../../img/svg/instagram.svg";
import { ReactComponent as Twitter } from "../../img/svg/twitter.svg";
import { ReactComponent as Linkedin } from "../../img/svg/linkedin.svg";

export const SocialTab = styled.div`
  /* margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and(min-width:767px) {
    margin-bottom: 0;
  }
  @media screen and(max-width:1200px) {
    margin-bottom: 60px;
  }
  @media screen and(min-width:1200px) {
    margin-right: 93px;
  } */

  /* @media screen and(max-width:1200px) */
  ${media.mobileAndTablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
  }
  /* @media screen and(min-width:1200px) { */
  ${media.desktop} {
    margin-right: 93px;
  }
`;

export const SocialTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: ${colors.white};
`;

export const SociaList = styled.ul`
  display: flex;
  flex-direction: row;
`;

export const SocialItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
export const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  /* background: rgba(255, 255, 255, 0.1); */
  background: ${colors.white};
  background: rgba(255, 255, 255, 0.1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background: ${colors.accent};
  }
`;

export const FacebookIcon = styled(Facebook)`
  /* fill-opacity: 0.6; */

  width: 20px;
  height: 20px;
  /* stroke: ${colors.accentButton}; */
  fill: ${colors.white};
  .facebook:hover & {
    fill: ${colors.accent};
  }
`;

export const TwitterIcon = styled(Twitter)`
  /* fill-opacity: 0.6; */

  width: 20px;
  height: 20px;
  /* stroke: ${colors.accentButton}; */
  fill: ${colors.white};
  .twitter:hover & {
    fill: ${colors.accent};
  }
`;
export const InstagramIcon = styled(Instagram)`
  /* fill-opacity: 0.6; */

  width: 20px;
  height: 20px;
  /* stroke: ${colors.accentButton}; */
  fill: ${colors.white};
  .instagram:hover & {
    fill: ${colors.accent};
  }
`;
export const LinkedinIcon = styled(Linkedin)`
  /* fill-opacity: 0.6; */

  width: 20px;
  height: 20px;
  /* stroke: ${colors.accentButton}; */
  fill: ${colors.white};
  .linkedin:hover & {
    fill: ${colors.accent};
  }
`;
// export const SocialIcon = styled.svg`
//   fill: ${colors.white};
// `;
