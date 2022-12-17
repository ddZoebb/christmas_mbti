import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const buttonStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-contents: center;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  outline: none;
  background: rgb(8, 120, 60);
  color: white;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  margin-top: 1rem;
  align-items: center;

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
