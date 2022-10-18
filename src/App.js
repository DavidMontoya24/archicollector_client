import { Routes, Route } from "react-router-dom";
import styled from "@emotion/styled";
import Navbar from "./components/Navbar";
import HomePage from "./pages/home-page";
import LandingPage from "./pages/lading-page";
import ShowPage from "./pages/show-page";
import CreatePage from "./pages/create-page";
import EditPage from "./pages/edit-page";

const Container = styled.div`
  height: 100vh;
  max-width: 72rem;
  margin: auto;
`;

function App() {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/home/:id" element={<ShowPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </Container>
  );
}

export default App;
