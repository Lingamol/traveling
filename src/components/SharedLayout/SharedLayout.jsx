import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import useMatchMedia from "../../hooks/use-match-media";
import AppBar from "../AppBar";
import Logo from "../Logo";
import Navigation from "../Navigation/";
import {
  Header,
  LogNav,
  Overlay,
  Container,
  Flex,
  FlexNav,
} from "./SharedLayout.styled";
// import Container from "../Container/Container";
import MainNav from "../MainNav/MainNav";
import Footer from "../Footer/Footer";
const SharedLayout = () => {
  // const { isMobile, isTablet } = useMatchMedia();
  // if (isMobile) {
  //   return (
  //     <>
  //       <Container>
  //         <Header>
  //           <Logo />
  //           <Navigation />
  //         </Header>
  //       </Container>
  //       <Suspense fallback={null}>
  //         <Outlet />
  //       </Suspense>
  //     </>
  //   );
  // } else if (isTablet) {
  //   return (
  //     <>
  //       <Container>
  //         <Header>
  //           <Logo />
  //           <LogNav>
  //             <AppBar />
  //             <Navigation />
  //           </LogNav>
  //         </Header>
  //       </Container>
  //       <Suspense fallback={null}>
  //         <Outlet />
  //       </Suspense>
  //     </>
  //   );
  // } else
  //   return (
  //     <Overlay>
  //       <Header>
  //         <ContainerHead>
  //           <LogNav>
  //             <Logo />
  //             {/* <Navigation /> */}
  //             <MainNav />
  //           </LogNav>
  //           <AppBar />
  //         </ContainerHead>
  //       </Header>
  //       <Suspense fallback={null}>
  //         <Outlet />
  //       </Suspense>
  //     </Overlay>
  //   );
  return (
    <>
      <Header>
        <Container>
          <Flex>
            <Logo />
            <FlexNav>
              <MainNav />
              <AppBar />
            </FlexNav>
          </Flex>
        </Container>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;
