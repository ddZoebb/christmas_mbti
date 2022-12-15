import styled, { css } from "styled-components";

const imageStyle = css`
  width: 100%;
  border-radius: 4px;
  padding-bottom: 3rem;
`;

const StyledImage = styled.img`
  ${imageStyle}
`;

const Image = (props) => {
  return <StyledImage {...props}></StyledImage>;
};

export default Image;
