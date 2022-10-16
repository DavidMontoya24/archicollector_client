import styled from "@emotion/styled";
import { colors } from "../styles";

const Container = styled.div`
  width: 100%;
  height: 5rem;
  border-radius: 3rem;
  background-color: ${colors.darker};
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  /* filter: blur(2px); */
  /* backdrop-filter: blur(10px); */
  /* filter: blur(2px); */
  /* opacity: 0.2; */
`;

const Content = styled.div`
  color: red;
  opacity: 1;
  filter: blur(0px);
`;

export default function Navbar() {
  return (
    <Container>
      <div>
        <h1>ArchiCollector</h1>
      </div>
    </Container>
  );
}
