import styled from "@emotion/styled";
import Navbar from "./components/Navbar";
import HomePage from "./pages/home-page";
import LandingPage from "./pages/lading-page";

const Container = styled.div`
  height: 100vh;
  max-width: 72rem;
  margin: auto;
`;

function App() {
  return (
    <Container>
      <Navbar />
      {/* <LandingPage /> */}
      <HomePage list={["house", "house2", "house3", "house4"]} />
    </Container>
  );
}

export default App;
