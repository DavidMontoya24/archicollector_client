import styled from "@emotion/styled";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { colors } from "../styles";

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
    color: ${colors.red};
  }
  & span {
    font-size: 5rem;
    color: ${colors.white};
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
      <h1>
        Archi<span>Collection</span>
      </h1>
      <p>
        Your personal web app collector where you can see, post and edit some of
        the most beautiful architecture you like!
      </p>
      <motion.div whileHover={{ scale: 1.2 }}>
        <NavLink to="/home" style={{ textDecoration: "none" }}>
          <Button>Enter the site</Button>
        </NavLink>
      </motion.div>
    </Container>
  );
}

export default LandingPage;
