import styled from "styled-components";

interface WrapperProps {
  backgroundColor?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  width: 100vw;
  padding: 72px 0px;
  background: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : `linear-gradient(180deg, #f6b868 0%, #ee6b2d 100%)`};
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 40px;
  color: #ffffff;
  padding: 0px;
  margin: 0px;
  margin-top: 72px;
  margin-bottom: 52px;
`;
