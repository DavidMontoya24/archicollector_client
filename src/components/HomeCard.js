import styled from "@emotion/styled";
import { colors } from "../styles";

const Card = styled.div`
  width: 18.75rem;
  height: 22rem;
  background-color: ${colors.yellow};
  padding: 0.5rem;
  border-radius: 2rem;
  margin: auto;
  position: relative;
  &:hover {
    box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.6);
  }
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

export default function HomeCard({ element }) {
  const { name, image, author, year } = element;
  return (
    <Card>
      <Title>{name}</Title>
      <Image>
        {image && <img src={image.split(",")[0]} alt="homecard_image" />}
      </Image>
      <Desc>
        <DescContent>
          <h4>{author}</h4>
          <h5>{year}</h5>
        </DescContent>
      </Desc>
      <BtnWrapper></BtnWrapper>
    </Card>
  );
}
