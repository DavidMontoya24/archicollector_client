import styled from "@emotion/styled";
import HomeCard from "../components/HomeCard";

const Wrapper = styled.div`
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
`;

const AddBtn = styled.div`
  width: 18.75rem;
  height: 22rem;
  border: 1px solid white;
  padding: 0.5rem;
  border-radius: 2rem;
  cursor: pointer;
`;

function HomePage({ list }) {
  return (
    <Wrapper>
      {list.map((elm) => (
        <HomeCard element={elm} key={elm.id} />
      ))}
      <AddBtn></AddBtn>
    </Wrapper>
  );
}

export default HomePage;
