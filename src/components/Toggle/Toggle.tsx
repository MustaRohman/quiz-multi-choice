import React, { FC } from "react";
import { SelectedOutline, Wrapper, Option } from "./Toggle.styles";

interface Props {
  value: any;
  onChange: (value: any) => void;
  activeStyle?: {
    backgroundColor: string;
    fontColor: string;
  };
  disabled?: boolean;
}

const Toggle: FC<Props> = ({
  value: toggleValue,
  onChange,
  children,
  disabled,
  activeStyle,
}) => {
  let selectedIndex = 0;
  let totalChildren = 0;
  let totalCharacterCount = 0;
  const childrenArray = React.Children.toArray(children);
  childrenArray.forEach((child, index) => {
    const reactChild = child as { props: { value: any } };
    if (React.isValidElement(reactChild) && reactChild.props) {
      totalChildren++;
      totalCharacterCount =
        totalCharacterCount + reactChild.props.value.text.length;
      if (reactChild.props.value === toggleValue) {
        selectedIndex = index;
      }
    }
  });
  const isVertical = totalChildren >= 3 || totalCharacterCount >= 30;

  function clickHandler(value: any) {
    if (disabled) {
      return;
    }
    onChange(value);
  }

  const childrenMapped = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return child;
    }
    if (child.type === Option) {
      const { value } = child.props;
      const isActive = value.text === toggleValue.text;
      const onClick = () => {
        clickHandler(value);
      };
      return React.cloneElement(child, {
        ...child.props,
        isVertical,
        onClick,
        "aria-selected": isActive,
        fontColor: isActive && activeStyle?.fontColor,
        role: "option",
      });
    }
  });

  return (
    <Wrapper
      selectedIndex={selectedIndex}
      totalOptions={totalChildren}
      isVertical={isVertical}
      role="listbox"
    >
      {childrenMapped}
      <SelectedOutline
        backgroundColor={activeStyle?.backgroundColor}
        fontColor={activeStyle?.fontColor}
        selectedIndex={selectedIndex}
        totalOptions={totalChildren}
        isVertical={isVertical}
      />
    </Wrapper>
  );
};

export default Toggle;
