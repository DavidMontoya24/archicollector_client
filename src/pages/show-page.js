import styled from "@emotion/styled";
import { colors } from "../styles";
import { NavLink, useParams } from "react-router-dom";
import { useBuildings } from "../context/buildings-context";
import { useEffect, useState } from "react";
import { showBuilding } from "../services/buildings_service";
import { MdEdit, MdDelete } from "react-icons/md";

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
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${colors.white};
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const Btn = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  width: fit-content;
  background-color: ${colors.red};
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
  }, []);

  return (
    <Container>
      <Header id="header">
        <p>{building.name}</p>
        <BtnWrapper>
          <StyledNavLink to={`/edit/${id}`}>
            <Btn>
              <MdEdit color="white" size="1.5rem" /> EDIT
            </Btn>
          </StyledNavLink>
          <Btn>
            <MdDelete color="white" size="1.5rem" /> DELETE
          </Btn>
        </BtnWrapper>
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
