import styled from "@emotion/styled";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  & h5 {
    margin: 0;
    font-size: 3rem;
  }
  & h1 {
    font-size: 5rem;
  }
  & p {
    max-width: 60%;
    text-align: center;
    font-size: 1.5rem;
  }
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
      <NavLink to="/home" style={{ textDecoration: "none" }}>
        <Button>Enter the site</Button>
      </NavLink>
    </Container>
  );
}

export default LandingPage;
