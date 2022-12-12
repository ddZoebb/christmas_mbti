import styled, { css } from "styled-components";

const imageStyle = css`
  width: 100%;
`;

const StyledImage = styled.img`
  ${imageStyle}
`;

const Image = (props) => {
  return <StyledImage {...props}></StyledImage>;
};

export default Image;
