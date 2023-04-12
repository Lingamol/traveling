import styled from "@emotion/styled";
import { colors, media } from "../../styles/stylesLayout";
export const LogoWord = styled.span`
  display: block;
  /* font-family: var(--second-font); */
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.17;

  /* @media screen and(min-width:1200px) { */
  ${media.desktop} {
    font-size: 26px;
    line-height: 1.19;
    margin-bottom: 0;
  }
`;
export const FirstWord = styled.span`
  color: ${colors.accent};
`;
export const SecondWord = styled.span`
  color: ${colors.white};
`;
