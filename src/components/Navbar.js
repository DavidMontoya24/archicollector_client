import styled from "@emotion/styled";
import { colors } from "../styles";
import { AiFillHome } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 5rem;
  border-radius: 3rem;
  background-color: ${colors.dark_transparency};
  color: ${colors.white};
  margin: 2rem 0;
  display: flex;
  align-items: center;
  backdrop-filter: blur(10px);
`;

const Content = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & h1 {
    color: ${colors.red};
  }
  & span {
    color: ${colors.white};
  }
`;

export default function Navbar() {
  let { pathname } = useLocation();
  return (
    <>
      {pathname !== "/" && (
        <Container>
          <Content>
            <NavLink to="/home">
              <AiFillHome color="white" size="2rem" />
            </NavLink>
            <h1>
              Archi<span>Collection</span>
            </h1>
            <NavLink to="/">
              <BiExit color="white" size="2rem" />
            </NavLink>
          </Content>
        </Container>
      )}
    </>
  );
}
