import styled from "@emotion/styled";
import Button from "../components/Button";
import Input from "../components/Input";
import { createBuilding } from "../services/buildings_service";
import { colors, typography } from "../styles";
import { Navigate } from "react-router-dom";
import { useState } from "react";

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

function CreatePage() {
  const [newCreated, setNewCreated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, year, author, location, description } = e.target.elements;
    const data = {
      name: name.value,
      year: year.value,
      author: author.value,
      location: location.value,
    };
    console.log("sending data:", data);
    createBuilding(data)
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
    setNewCreated(true);
  };

  return (
    <Container>
      {newCreated && <Navigate to="/home" replace={true} />}
      <Form onSubmit={handleSubmit}>
        <Title>Create your building</Title>
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
        <Button type="submit">Create</Button>
      </Form>
    </Container>
  );
}

export default CreatePage;
