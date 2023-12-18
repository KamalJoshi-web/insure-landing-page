import React from "react";
import {
  Container,
  Navbar,
  Banner,
  Services,
  ProBanner,
  Footer,
} from "./components";

const App = () => {
  return (
    <Container>
      <Navbar />
      <Banner />
      <Services />
      <ProBanner />
      <Footer />
    </Container>
  );
};

export default App;
