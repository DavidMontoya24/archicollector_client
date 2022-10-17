import { Routes, Route } from "react-router-dom";
import styled from "@emotion/styled";
import Navbar from "./components/Navbar";
import HomePage from "./pages/home-page";
import LandingPage from "./pages/lading-page";
import { useBuildings } from "./context/buildings-context";
import { useEffect, useState } from "react";
import ShowPage from "./pages/show-page";
import CreatePage from "./pages/create-page";

const Container = styled.div`
  height: 100vh;
  max-width: 72rem;
  margin: auto;
`;

const test = {
  name: "Unité d'habitation",
  year: 1952,
  author: "Le Corbusier",
  location: "Marseille, France",
  description:
    "At a time in which the need for housing was at an unprecedented high, Unité d'habitation, completed in 1952, took Le Corbusier's famed words - a house is a “machine for living in” - and applied it at scale. Quintessentially brutalist in style, the monolithic building boasts a powerful presence and raw honesty. Heralding a focus on communal living for all the inhabitants to shop, play, live, and come together in a “vertical garden city”. Vitruvian in nature, it presents an architecture based on human proportions and scale - a recurring theme throughout Corbusier's writings, paintings and models.  The first building of its kind, Unité d'habitation marked the genesis of modern multi-residential design.",
  image:
    "https://france3-regions.francetvinfo.fr/image/RXVrnDEL3PcqFxWqW_GiO0NJoWE/1200x1200/regions/2020/06/09/5edf7c5287d10_cite_carte_postale-4125320.jpeg",
};

function App() {
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
        <Route path="/create" element={<CreatePage />} />
        <Route path="/home/:id" element={<ShowPage />} />
        <Route path="/edit/:id" element={<h1>Edit!!</h1>} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </Container>
  );
}

export default App;
