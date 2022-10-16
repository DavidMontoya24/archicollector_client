import { Routes, Route } from "react-router-dom";
import styled from "@emotion/styled";
import Navbar from "./components/Navbar";
import HomePage from "./pages/home-page";
import LandingPage from "./pages/lading-page";
import { useBuildings } from "./context/buildings-context";
import { useEffect, useState } from "react";

const Container = styled.div`
  height: 100vh;
  max-width: 72rem;
  margin: auto;
`;

const testList = [
  {
    name: "Bauhaus Dessau",
    year: 1925,
    author: "Walter Gropius",
    location: "Dessau, Germany",
    description:
      "Translating to mean building house in English, Bauhaus was a German art school, founded by its own architect, Walter Gropius, operational in three consecutive locations from 1919 to 1933. Though as an educational facility the life of Bauhaus was somewhat short lived, its influence on the progression of modernism and modern architecture was decidedly profound. Bauhaus second incarnation, located in Dessau, is acclaimed to mark a pivotal point for the school - from fine and applied arts focused; to pioneer of architecture and industrial design.",
    image:
      "https://nthp-savingplaces.s3.amazonaws.com/2019/01/16/17/28/30/8/Bauhaus_Bauhaus%20School%20Dessau_cr%20toml1959%20Flickr%20CC%20BY-NC%202.0_ed.jpg",
  },
  {
    name: "Guggenheim Museum",
    year: 1939,
    author: "Frank Lloyd Wright",
    location: "New York City, USA",
    description:
      "Designed by Frank Lloyd Wright, the R Solomon Guggenheim Museum is an unconventional adaptation of modernist design principles. The structure's stunning exterior shows stacked, organic curves that swivel towards the sky. Contrasting the nature of the traditional Manhattan grid, this building was a revolutionary tenement within the modernist movement.",
    image:
      "https://images.adsttc.com/media/images/5037/de51/28ba/0d59/9b00/00bc/newsletter/stringio.jpg?1414230424",
  },
];

function App() {
  console.log(useBuildings());
  const { buildings } = useBuildings();
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(buildings);
  }, [buildings]);
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage list={list} />} />
        <Route path="/create" element={<HomePage />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </Container>
  );
}

export default App;
