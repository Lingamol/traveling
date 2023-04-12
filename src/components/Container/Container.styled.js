import styled from "@emotion/styled";
import { media, colors } from "../../styles/stylesLayout";

export const Wrapper = styled.div`
  border: 2px solid ${colors.accent};
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;

  ${media.tablet} {
    padding: 0 32px;
    /* width: 768px; */
  }

  ${media.mobile} {
    padding: 0 20px;
    /* width: 480px; */
  }
`;
// @media screen and(min-width:480px) {
//   width: 480px;
// }
// @media screen and(min-width:768px) {
//   width: 768px;
// }
// @media screen and(min-width:1200px) {
//   width: 1200px;
// }
