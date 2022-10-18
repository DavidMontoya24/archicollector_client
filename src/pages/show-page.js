import styled from "@emotion/styled";
import { colors } from "../styles";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteProperty, showBuilding } from "../services/buildings_service";
import { MdEdit, MdDelete } from "react-icons/md";
import { Navigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const Container = styled.div`
  padding: 2rem 4rem;
  background-color: ${colors.dark_transparency};
  border-radius: 3rem;
  backdrop-filter: blur(10px);
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
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.dark};
  max-height: inherit;
  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const Content2 = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  background-color: ${colors.red};
  border-radius: 1rem;
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  line-height: 1.5rem;
  text-align: center;
  & h4 {
    margin: 0;
    font-weight: 500;
    font-size: 1.5rem;
  }
  & p,
  h5 {
    margin: 0;
    font-weight: 300;
  }
  & p {
    text-align: justify;
    max-height: 25rem;
    overflow: overlay;
  }
`;

const Content3 = styled.div`
  color: white;
  background-color: ${colors.dark};
  display: flex;
`;

const Image2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${colors.white};
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Btn = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  gap: 0.5rem;
  width: fit-content;
  background-color: ${colors.yellow};
  color: ${colors.darker};
  font-weight: 600;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.2);
    background-color: ${colors.red};
    color: ${colors.white};
    & svg {
      fill: ${colors.white};
    }
  }
`;

function ShowPage() {
  const [building, setBuilding] = useState("");
  const [goHome, setGoHome] = useState(false);
  const [images, setImages] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    showBuilding(id)
      .then((data) => {
        setBuilding(data);
      })
      .catch(console.log);
  }, [id]);

  useEffect(() => {
    setTimeout(() => {
      const [image1, image2, image3] = building.image.split(", ");
      setImages([image1, image2, image3]);
    }, 1000);
  }, [building]);

  const handleDelete = () => {
    deleteProperty(id)
      .then((data) => console.log(data))
      .catch(console.log);
    setGoHome(true);
  };

  return (
    <Container>
      <Header id="header">
        <p>{building.name}</p>
        <BtnWrapper>
          <StyledNavLink to={`/edit/${id}`}>
            <Btn>
              <MdEdit color={`${colors.darker}`} size="1.5rem" /> EDIT
            </Btn>
            {goHome && <Navigate to="/home" replace={true} />}
          </StyledNavLink>
          <Btn onClick={handleDelete}>
            <MdDelete color={`${colors.darker}`} size="1.5rem" /> DELETE
          </Btn>
        </BtnWrapper>
      </Header>
      <Wrapper>
        <MainImage>
          {!images && <Loader />}
          {images && <img src={building.image.split(", ")[0]} alt="main_img" />}
        </MainImage>
        <Content2>
          <div>
            <h4>Author</h4>
            <h5>{building.author}</h5>
          </div>
          <div>
            <h4>Year</h4>
            <h5>{building.year}</h5>
          </div>
          <div>
            <h4>Location</h4>
            <h5>{building.location}</h5>
          </div>
          <div>
            <h4>Description</h4>
            <p>{building.description}</p>
          </div>
        </Content2>

        <Content3>
          <Image2>
            {!images && <Loader />}
            {images && (
              <img src={building.image.split(", ")[1]} alt="main_img" />
            )}
          </Image2>
          <Image2>
            {!images && <Loader />}
            {images && (
              <img src={building.image.split(", ")[2]} alt="main_img" />
            )}
          </Image2>
        </Content3>
      </Wrapper>
    </Container>
  );
}

export default ShowPage;
