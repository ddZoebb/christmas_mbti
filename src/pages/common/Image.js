import styled, { css } from "styled-components";

const imageStyle = css`
  width: 100%;
  border-radius: 4px;

`;

const StyledImage = styled.img`
  ${imageStyle}
`;

const Image = (props) => {
  return <StyledImage {...props}></StyledImage>;
};

export default Image;
