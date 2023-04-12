import { Cont, ImgHpDesk, MainBack, Title } from "./Home.styled";
import Hero from "../Hero/Hero";
import Container from "../Container/Container";

const Home = () => {
  return (
    <>
      <Hero />
      <Container>
        <Cont>
          <Title>Take good care of</Title>
          <Title>your small pets</Title>

          <MainBack>
            <ImgHpDesk></ImgHpDesk>
          </MainBack>
        </Cont>
      </Container>
    </>
  );
};

export default Home;
