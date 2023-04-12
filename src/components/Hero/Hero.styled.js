import styled from "@emotion/styled";
import heroBgImg from "../../img/Hero/hero-bg.jpg";
export const Wrapper = styled.div`
  border: 2px solid #fd7e14;
  width: auto;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #2a2a2a;
  color: #fff;
  text-align: center;
  background-position: center;
  background: url(${heroBgImg}) repeat-x;
  background-size: auto;
`;
