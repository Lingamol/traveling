import styled from "styled-components";
import { media, colors } from "../../styles/stylesLayout";
// export const Overlay = styled.div`
//   backdrop-filter: blur(10px);
//   background-color: #00466e1a;
//   box-shadow: 0 3px 10px #0003;
// `;

export const Header = styled.header`
  backdrop-filter: blur(10px);
  background-color: #00466e1a;
  box-shadow: 0 3px 10px #0003;
  padding: 20px 0;
  outline: 2px solid red;
  position: sticky;
  top: 0px;
  /* display: flex;
  align-items: flex-end;
  justify-content: space-between; */
  /* margin-top: 20px; */
  /* padding-top: 20px;
  padding-bottom: 20px; */
  /* width: 100%;
  z-index: 1000;
  backdrop-filter: blur(10px);
  background-color: #00466e1a;
 
  position: absolute;
  /* position: sticky; */
  /* top: 0;
  left: 0; */

  /* box-shadow: 0 3px 10px #0003;
  ${media.mobile} {
    height: 48px;
    align-items: flex-start;
  } */
`;
export const Container = styled.div`
  outline: 2px solid green;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;

  ${media.tablet} {
    padding: 0 32px;
  }

  ${media.mobile} {
    padding: 0 20px;
  }
`;
export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const FlexNav = styled.div`
  display: flex;
  align-items: center;
`;
export const LogNav = styled.div`
  display: flex;
  align-items: flex-start;

  ${media.mobileAndTablet} {
    align-items: center;
  }
`;

export const ContainerHead = styled.div`
  display: flex;
  /* align-items: baseline; */
  justify-content: space-between;
  /* margin-top: 20px; */
  /* padding-top: 20px;
  padding-bottom: 20px; */
  border: 2px solid ${colors.accent};

  max-width: 1280px;
  margin: 0 auto;
  padding: 20 16px;

  ${media.tablet} {
    padding: 0 32px;
  }

  ${media.mobile} {
    padding: 0 20px;
  }
`;
