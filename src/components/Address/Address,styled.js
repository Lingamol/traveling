import styled from "styled-components";
import { media, colors } from "../../styles/stylesLayout";

export const AddressTab = styled.address``;

export const AddrList = styled.ul`
  /* @media screen and(max-width:767px) */
  ${media.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
  }
`;

export const AddrItem = styled.li`
  margin-bottom: 9px;
  &:last-child {
    margin-bottom: 0;
  }
  &:last-child > a {
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const AddrLink = styled.a`
  display: inline-block;
  font-style: normal;
  font-size: 14px;
  line-height: 1.71;
  letter-spacing: 0.03em;
  color: ${colors.white};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: ${colors.accent};
  }
`;
