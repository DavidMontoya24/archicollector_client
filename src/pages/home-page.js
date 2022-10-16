import styled from "@emotion/styled";
import HomeCard from "../components/HomeCard";

const Wrapper = styled.div`
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
`;

function HomePage({ list }) {
  return (
    <Wrapper>
      {list.map((elm) => (
        <HomeCard>{elm}</HomeCard>
      ))}
    </Wrapper>
  );
}

export default HomePage;
