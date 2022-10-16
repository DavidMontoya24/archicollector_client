import styled from "@emotion/styled";
import Button from "../components/Button";

const Container = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function LandingPage() {
  return (
    <Container>
      <h5>Welcome to</h5>
      <h1>ArchiCollection</h1>
      <p>
        Your personal web app collector where you can see, post and edit some of
        the most beautiful architecture you like!
      </p>
      <Button>Enter the site</Button>
    </Container>
  );
}

export default LandingPage;