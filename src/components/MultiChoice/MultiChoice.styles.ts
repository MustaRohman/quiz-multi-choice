import styled from "styled-components";

interface WrapperProps {
  backgroundColor?: string;
}

export const Wrapper = styled.main<WrapperProps>`
  width: 100%;
  padding: 72px 0px;
  background: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : `linear-gradient(180deg, #f6b868 0%, #ee6b2d 100%)`};

  @media only screen and (max-width: 600px) {
    height: 100vh;
    padding: 16px 0px;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-family: Mulish;
  font-size: 40px;
  color: #ffffff;
  padding: 0px;
  margin: 0px;
  margin-top: 72px;
  margin-bottom: 52px;
  margin-right: auto;
  margin-left: auto;
  word-break: break-word;
  max-width: 100vw;

  @media only screen and (max-width: 600px) {
    margin-top: 0px;
    font-size: 18px;
  }
`;
