import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const buttonStyle = css`
  display: inline-block;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  background: rgb(8, 120, 60);
  color: white;
  font-size: 1.2rem;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
  margin-top: 2rem;
  padding:1rem;
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
