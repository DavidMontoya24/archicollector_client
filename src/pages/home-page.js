import styled from "@emotion/styled";
import HomeCard from "../components/HomeCard";
import { NavLink } from "react-router-dom";
import { colors } from "../styles";
import { useBuildings } from "../context/buildings-context";
import { useEffect, useState } from "react";
import { getBuildings } from "../services/buildings_service";
import { IoMdAddCircle } from "react-icons/io";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
`;

const AddBtn = styled.div`
  width: 18.75rem;
  height: 22rem;
  border: 5px dotted white;
  padding: 0.5rem;
  background-color: ${colors.dark_transparency};
  border-radius: 2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${colors.white};
`;

function HomePage() {
  const { buildings } = useBuildings();
  const [list, setList] = useState(buildings);

  useEffect(() => {
    getBuildings().then((data) => {
      setList(data);
    });
  }, [buildings]);

  return (
    <Wrapper>
      {list.map((elm) => (
        <motion.div
          whileHover={{ scale: 0.85 }}
          whileTap={{ scale: 1.1 }}
          key={elm.id}
        >
          <StyledNavLink to={`/home/${elm.id}`} key={elm.id}>
            <HomeCard element={elm} key={elm.id} />
          </StyledNavLink>
        </motion.div>
      ))}
      <StyledNavLink to="/create">
        <motion.div whileHover={{ scale: 0.85 }} whileTap={{ scale: 1.1 }}>
          <AddBtn>
            <IoMdAddCircle size="4rem" />
          </AddBtn>
        </motion.div>
      </StyledNavLink>
    </Wrapper>
  );
}

export default HomePage;
