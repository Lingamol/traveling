import styled from "@emotion/styled";
import { media, colors } from "../../styles/stylesLayout";

export const NavList = styled.ul`
  display: flex;
  margin-right: 80px;
`;
export const NavItem = styled.li`
  color: #181c27;
  /* margin-left: 80px; */
  &:not(:last-child) {
    margin-right: 40px;
  }
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  text-decoration: none;
  cursor: pointer;
  :focus,
  :hover {
    color: ${colors.accent};

    text-decoration-line: underline;
  }
  /* ${media.tablet} {
    font-size: 48px;
    line-height: 66px;
    letter-spacing: 0.04em;
    margin-top: 60px;
    margin-left: 0;
  }

  ${media.mobile} {
    font-size: 32px;
    line-height: 44px;
    margin-top: 40px;
    letter-spacing: 0.04em;
    margin-left: 0;
  } */

  &.active {
    color: ${colors.accent};
  }
`;
