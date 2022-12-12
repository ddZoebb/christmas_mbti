import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const buttonStyle = css`
  width: 100%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  background: red;
  color: white;
  font-size: 1rem;
  font-weight: bold;
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const Button = (props) => {
  return props.to ? <StyledLink {...props} /> : <StyledButton {...props} />;
};

export default Button;
