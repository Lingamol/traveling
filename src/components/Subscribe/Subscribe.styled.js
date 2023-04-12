import styled from "styled-components";
import { media, colors } from "../../styles/stylesLayout";
import { ReactComponent as Telagram } from "../../img/svg/telegram.svg";

export const Form = styled.form`
  ${media.mobileAndTablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const FormLabel = styled.label`
  display: inline-block;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: ${colors.white};
`;

export const FormPosition = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* @media screen and(max-width:1199px) */
  ${media.mobileAndTablet} {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  /* @media screen and(min-width:1200px) */
  ${media.desktop} {
    display: flex;
    flex-direction: row;
  }
`;

export const FormInMail = styled.input`
  margin-bottom: 20px;
  padding: 15px 16px;
  width: 100%;
  height: 50px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  border-radius: 4px;
  background-color: transparent;
  color: ${colors.white};
  outline: none;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus {
    border-color: ${colors.accent};
  }
  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: 0.03em;
    color: rgba(255, 255, 255, 0.6);
  }
  /* @media screen and(min-width:480px)  */
  ${media.tabletAndDesktop} {
    width: 450px;
  }
  /* @media screen and(min-width:1200px) */
  ${media.desktop} {
    width: 358px;
    margin-bottom: 0;
    margin-right: 12px;
  }
`;

export const FormButton = styled.button`
  display: flex;
  align-items: center;
  padding-left: 29px;
  padding-right: 28px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: ${colors.accent};
  color: ${colors.white};
`;

export const TelagramIcon = styled(Telagram)`
  /* fill-opacity: 0.6; */
  margin-left: 10px;
  width: 24px;
  height: 24px;
  /* stroke: ${colors.accentButton}; */
  /* fill: ${colors.white};
  .subscribe:hover & {
    fill: ${colors.accent};
  } */
`;
