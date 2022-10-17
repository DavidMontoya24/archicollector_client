import styled from "@emotion/styled";
import { colors } from "../styles";
import { AiFillHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 5rem;
  border-radius: 3rem;
  background-color: ${colors.darker};
  color: ${colors.white};
  margin: 2rem 0;
  display: flex;
  align-items: center;
  /* filter: blur(2px); */
  /* backdrop-filter: blur(10px); */
  /* filter: blur(2px); */
  /* opacity: 0.2; */
`;

const Content = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* color: red;
  opacity: 1;
  filter: blur(0px); */
`;

export default function Navbar() {
  return (
    <Container>
      <Content>
        <NavLink to="/home">
          <AiFillHome color="white" size="2rem" />
        </NavLink>
        <h1>ArchiCollector</h1>
      </Content>
    </Container>
  );
}
