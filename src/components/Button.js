import { colors } from "../styles/colors";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  border: none;
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  color: ${colors.darker};
  font-weight: 600;
  background-color: ${colors.yellow};
  cursor: pointer;
  border-radius: 1rem;
  &:hover {
    background-color: ${colors.dark};
    color: ${colors.white};
  }
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

function Button({ children, hasIcon, Icon, leftIcon, onClick, style }) {
  return (
    <StyledButton onClick={onClick} style={style}>
      <StyledButtonWrapper>
        {leftIcon}
        {children}
        {hasIcon && <Icon />}
      </StyledButtonWrapper>
    </StyledButton>
  );
}

export default Button;
