import styled from "@emotion/styled";
import LandingPage from "./pages/lading-page";

const Container = styled.div`
  height: 100vh;
  max-width: 72rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <LandingPage />
    </Container>
  );
}

export default App;
