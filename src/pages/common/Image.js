import styled, { css } from "styled-components";

const imageStyle = css`
  width: 600px;
  height: 400px;
`;

const StyledImage = styled.img`
  ${imageStyle}
`;

const Image = (props) => {
  return <StyledImage {...props}></StyledImage>;
};

export default Image;
