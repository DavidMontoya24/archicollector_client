import styled from "@emotion/styled";
import Button from "../components/Button";
import Input from "../components/Input";
import { showBuilding, updateBuilding } from "../services/buildings_service";
import { colors, typography } from "../styles";
import { Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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

function EditPage() {
  const [data, setData] = useState({});
  const { id } = useParams();
  const [goHome, setGoHome] = useState(false);
  const [pill, setPill] = useState("Please provide all inputs");

  useEffect(() => {
    showBuilding(id)
      .then((data) => setData(data))
      .catch(console.log);
  }, [id]);

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, year, author, location, description } = e.target.elements;
    const fomrData = {
      name: name.value,
      year: year.value,
      author: author.value,
      location: location.value,
      description: description.value,
    };
    console.log("sending data to edit:", fomrData);
    updateBuilding(data, id)
      .then((data) => {
        setGoHome(true);
        console.log(data);
      })
      .catch((err) => {
        setGoHome(false);
        const error = JSON.parse(err.message);
        setPill(error.data);
      });
  };

  return (
    <Container>
      {goHome && <Navigate to="/home" replace={true} />}
      <Form onSubmit={handleSubmit}>
        <Title>Edit your building</Title>
        <Pill>{pill}</Pill>
        <Input
          name="name"
          placeholder="Ronchamp Chapel"
          width="100%"
          value={data.name}
          label="name"
          onChange={handleChange}
        />
        <Input
          name="year"
          placeholder="2020"
          width="100%"
          label="Year"
          value={data.year}
          onChange={handleChange}
        />
        <Input
          name="author"
          placeholder="Mies Van der Rohe"
          width="100%"
          value={data.author}
          onChange={handleChange}
          label="author"
        />
        <Input
          name="location"
          placeholder="Berlin, Germany"
          width="100%"
          value={data.location}
          onChange={handleChange}
          label="location"
        />
        <Input
          isTxtArea={true}
          name="description"
          width="100%"
          value={data.description}
          onChange={handleChange}
          label="description"
        />
        <Button type="submit" style={{ alignSelf: "center" }}>
          Update
        </Button>
      </Form>
    </Container>
  );
}

export default EditPage;
