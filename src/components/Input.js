import styled from "@emotion/styled";
import { colors, typography } from "../styles";
import { fonts } from "../styles/typography";

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  padding: 0.5rem;
  gap: 0.5rem;
  /* border: 1px solid red; */
  width: ${({ width }) => width};
  background-color: ${colors.white};
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  background-color: ${colors.white};
  color: ${colors.darker};
  font-weight: 500;
  &::placeholder {
    font-weight: 300;
    color: ${colors.dark};
  }
`;

const StyledLabel = styled.label`
  text-transform: uppercase;
  color: ${colors.white};
`;

const TxtArea = styled.textarea`
  border: none;
  outline: none;
  width: 100%;
  height: 10rem;
  background-color: ${colors.white};
  color: ${colors.darker};
  font-weight: 500;
  &::placeholder {
    font-weight: 300;
    color: ${colors.dark};
  }
`;

function Input({
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  label,
  width,
  leftIcon,
  isTxtArea,
}) {
  return (
    <div>
      {label && <StyledLabel htmlFor={id || name}>{label}</StyledLabel>}
      <StyledInputContainer width={width}>
        {leftIcon}
        {!isTxtArea && (
          <StyledInput
            type={type}
            name={name}
            id={id || name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        )}
        {isTxtArea && <TxtArea name={name} placeholder={placeholder}></TxtArea>}
      </StyledInputContainer>
    </div>
  );
}

export default Input;
