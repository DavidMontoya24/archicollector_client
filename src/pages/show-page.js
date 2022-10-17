import styled from "@emotion/styled";
import { colors } from "../styles";
import { useParams } from "react-router-dom";
import { useBuildings } from "../context/buildings-context";
import { useEffect, useState } from "react";
import { showBuilding } from "../services/buildings_service";

const Container = styled.div`
  padding: 2rem 4rem;
  background-color: ${colors.darker};
  border-radius: 3rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 20rem;
  grid-template-rows: 30rem 15rem;
  column-gap: 2rem;
`;

const Header = styled.div`
  max-height: 5rem;
  color: ${colors.white};
  margin-bottom: 2rem;
  & p {
    font-size: 4rem;
    font-weight: 500;
  }
`;

const MainImage = styled.div`
  background-color: yellow;
  max-height: inherit;
  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const Content2 = styled.div`
  height: 18rem;
  border: 1px solid white;
`;

const Content3 = styled.div`
  color: white;
  background-color: blue;
`;

const Content4 = styled.div`
  height: 27rem;
  background-color: ${colors.red};
  transform: translateY(-12rem);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  line-height: 1.2rem;
  text-align: center;
  & h4 {
    margin: 0;
    font-weight: 500;
  }
  & p {
    margin: 0;
    font-weight: 300;
    max-height: 13rem;
    overflow: overlay;
  }
`;

function ShowPage() {
  const [building, setBuilding] = useState("");
  const { id } = useParams();

  useEffect(() => {
    showBuilding(id)
      .then((data) => {
        setBuilding(data);
      })
      .catch(console.log);
    console.log("Selected", building);
  }, []);

  return (
    <Container>
      <Header>
        <p>{building.name}</p>
      </Header>
      <Wrapper>
        <MainImage>
          <img src={building.image} alt="main_img" />
        </MainImage>
        <Content2></Content2>
        <Content3>more fotos</Content3>
        <Content4>
          <div>
            <h4>Author</h4>
            <p>{building.author}</p>
          </div>
          <div>
            <h4>Year</h4>
            <p>{building.year}</p>
          </div>
          <div>
            <h4>Location</h4>
            <p>{building.location}</p>
          </div>
          <div>
            <h4>Description</h4>
            <p>{building.description}</p>
          </div>
        </Content4>
      </Wrapper>
    </Container>
  );
}

export default ShowPage;
