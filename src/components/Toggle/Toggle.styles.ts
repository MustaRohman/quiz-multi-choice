import styled from "styled-components";

interface OutlineProps {
  toggleValue?: boolean;
  selectedIndex: number;
  totalOptions: number;
  isVertical?: boolean;
  backgroundColor?: string;
  fontColor?: string;
}

export interface OptionProps {
  value: any;
  isVertical?: boolean;
  fontColor?: string;
}

export const Wrapper = styled.div<OutlineProps>`
  margin: 10px auto;
  max-width: 900px;
  width: 100%;
  border: 2px solid #fbfbfb;
  box-sizing: border-box;
  border-radius: ${(props) => (props.isVertical ? `24` : `100`)}px;
  padding: 0px;
  position: relative;
  display: flex;
  flex-direction: ${(props) => (props.totalOptions === 3 ? `column` : `row`)};
  justify-content: space-between;

  :not(:last-child) {
    margin-bottom: 24px;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    border-radius: 24px;
  }
`;

export const Option = styled.div<OptionProps>`
  margin: 0px;
  max-width: 900px;
  width: ${(props) => (props.isVertical ? `100` : `50`)}%;
  height: 77px;
  box-sizing: border-box;
  cursor: pointer;
  z-index: 100;
  font-weight: bold;
  line-height: 77px;
  text-align: center;
  color: ${(props) => (props.fontColor ? props.fontColor : "white")};
  border-radius: 100px;
  font-size: 24px;

  @media only screen and (max-width: 600px) {
    height: 48px;
    line-height: 48px;
    padding: 0px;
    width: 100%;
    font-size: 18px;
  }
`;

const verticalStyling = (props: OutlineProps) => `
  transition: top 0.2s, border-top-left-radius 0.2s,
      border-top-right-radius 0.2s, border-bottom-left-radius 0.2s,
      border-bottom-right-radius 0.2s;
  top: 0px;
  left: 0px;
  margin: 0 auto;
  height: ${100 / props.totalOptions}%;
  width: 100%;  
  top: ${(100 / props.totalOptions) * props.selectedIndex}%;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;

  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
${
  props.selectedIndex === 0
    ? `
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  `
    : ``
}

${
  props.selectedIndex === props.totalOptions - 1
    ? `
    border-radius: 0px;

    border-top-left-radius: 0px;
    border-top-right-radius: 0px;

    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    `
    : ``
}
`;

export const SelectedOutline = styled.div<OutlineProps>`
  width: 50%;
  height: 77px;
  border-radius: 100px;
  position: absolute;
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : `#f8caa3`};
  z-index: 50;

  transition: margin-left 0.2s;
  margin-left: ${(props) => (props.selectedIndex / props.totalOptions) * 100}%;
  @media only screen and (max-width: 600px) {
    ${(props) => verticalStyling(props)}
  }

  ${(props) => (props.totalOptions === 3 ? verticalStyling(props) : ``)};
`;
