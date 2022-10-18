import styled from "@emotion/styled";
import Button from "../components/Button";
import Input from "../components/Input";
import { createBuilding } from "../services/buildings_service";
import { colors, typography } from "../styles";
import { Navigate } from "react-router-dom";
import { useState } from "react";

const defaultImgs =
  "https://images.adsttc.com/media/images/5252/04fc/e8e4/4eff/0200/05d5/slideshow/_MG_4727.jpg?1381106925, https://images.adsttc.com/media/images/5252/043e/e8e4/4ecb/1700/056f/slideshow/_MG_4621.jpg?1381106734, https://images.adsttc.com/media/images/5252/04eb/e8e4/4eff/0200/05d4/slideshow/_MG_4718.jpg?1381106904";

const Container = styled.div`
  padding: 2rem 4rem;
  background-color: ${colors.darker};
  border-radius: 3rem;
`;

const Form = styled.form`
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.div`
  ${typography.headline[3]}
  align-self: center; ;
`;

const Pill = styled.div`
  width: 15rem;
  height: 2rem;
  border-radius: 2rem;
  align-self: center;
  background-color: ${colors.red};
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;

function CreatePage() {
  const [newCreated, setNewCreated] = useState(false);
  const [pill, setPill] = useState("Please provide all inputs");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, year, author, location, description } = e.target.elements;
    const data = {
      name: name.value,
      year: year.value,
      author: author.value,
      location: location.value,
      description: description.value,
      image: defaultImgs,
    };
    console.log("sending data:", data);

    createBuilding(data)
      .then((data) => {
        setNewCreated(true);
        console.log(data);
      })
      .catch((err) => {
        setNewCreated(false);
        const error = JSON.parse(err.message);
        setPill(error.data);
      });
  };

  return (
    <Container>
      {newCreated && <Navigate to="/home" replace={true} />}
      <Form onSubmit={handleSubmit}>
        <Title>Create your building</Title>
        <Pill>{pill}</Pill>
        <Input
          name="name"
          placeholder="Ronchamp Chapel"
          width="100%"
          label="name"
        />
        <Input name="year" placeholder="2020" width="100%" label="Year" />
        <Input
          name="author"
          placeholder="Mies Van der Rohe"
          width="100%"
          label="author"
        />
        <Input
          name="location"
          placeholder="Berlin, Germany"
          width="100%"
          label="location"
        />
        <Input
          isTxtArea={true}
          name="description"
          placeholder="A description of the building..."
          width="100%"
          label="description"
        />
        <Button type="submit" style={{ alignSelf: "center" }}>
          Create
        </Button>
      </Form>
    </Container>
  );
}

export default CreatePage;
