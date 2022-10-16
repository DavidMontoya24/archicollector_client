import styled from "@emotion/styled";

const Card = styled.div`
  width: 18.75rem;
  height: 22rem;
  background-color: green;
  border-radius: 2rem;
  margin: auto;
`;

export default function HomeCard({ children }) {
  return <Card>{children}</Card>;
}
