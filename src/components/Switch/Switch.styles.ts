import styled from "styled-components";

interface OutlineProps {
  readonly toggleValue?: boolean;
  readonly selectedIndex: number;
}

export interface OptionProps {
  readonly value: boolean;
}

export const Wrapper = styled.ul`
  width: 900px;
  height: 80px;
  border: 2px solid #f9d29f;
  box-sizing: border-box;
  border-radius: 100px;
  padding: 0px;

  display: flex;
  //   flex-direction: row;
  //   justify-content: space-between;
`;

export const Option = styled.option<OptionProps>`
  margin: 0px;
  width: 450px;
  height: 77px;
  padding: 18px;
  box-sizing: border-box;
  cursor: pointer;
  z-index: 100;
  font-weight: bold;
  //   font-family: Mulish;
  color: white;
  border-radius: 100px;
`;

export const SelectedOutline = styled.div<OutlineProps>`
  width: 450px;
  height: 77px;
  border-radius: 100px;
  position: absolute;
  background: #f8caa3;
  z-index: 50;

  transition: margin-left 0.2s;
  margin-left: ${(props) => props.selectedIndex * 448}px;
`;
