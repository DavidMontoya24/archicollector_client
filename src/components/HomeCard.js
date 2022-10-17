import styled from "@emotion/styled";
import { colors, typography } from "../styles";
import { FaBuilding } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Card = styled.div`
  width: 18.75rem;
  height: 22rem;
  background-color: ${colors.yellow};
  padding: 0.5rem;
  border-radius: 2rem;
  margin: auto;
  position: relative;
`;

const Image = styled.div`
  height: 80%;
  width: 100%;
  filter: brightness(0.7);
  & img {
    border-radius: 1.5rem 1.5rem 0 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const Title = styled.div`
  max-width: 100%;
  position: absolute;
  font-size: 2.5rem;
  padding: 0.5rem;
  line-height: 2.5rem;
  font-weight: 500;
  z-index: 1;
`;

const Desc = styled.div`
  padding: 0.5rem;
  border-radius: 0 0 1.5rem 1.5rem;
  background-color: ${colors.darker};
  height: 20%;
`;

const DescContent = styled.div`
  width: 70%;
  & h4 {
    margin: 0;
  }
  & h5 {
    margin: 0;
    font-weight: 300;
  }
`;

const BtnWrapper = styled.div`
  bottom: 2.5rem;
  right: 1.2rem;
  position: absolute;
  display: flex;
  gap: 0.75rem;
`;

const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  height: 4rem;
  width: 4rem;
  background-color: ${colors.red};
`;

export default function HomeCard({ element }) {
  const { id, name, image, author, year } = element;
  return (
    <Card>
      <Title>{name}</Title>
      <Image>
        <img src={image} />
      </Image>
      <Desc>
        <DescContent>
          <h4>{author}</h4>
          <h5>{year}</h5>
        </DescContent>
      </Desc>
      <BtnWrapper>
        <NavLink to={`/edit/${element.id}`}>
          <Btn>
            <MdEdit color="white" size="2.5rem" />{" "}
          </Btn>
        </NavLink>
      </BtnWrapper>
    </Card>
  );
}
