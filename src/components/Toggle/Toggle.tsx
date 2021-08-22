import React, { FC } from "react";
import { SelectedOutline, Wrapper, Option } from "./Toggle.styles";

interface Props {
  value: any;
  onChange: (value: any) => void;
}

const Toggle: FC<Props> = ({ value: toggleValue, onChange, children }) => {
  let selectedIndex = 0;
  let totalChildren = 0;
  const childrenArray = React.Children.toArray(children);
  childrenArray.forEach((child, index) => {
    const reactChild = child as { props: { value: any } };
    if (React.isValidElement(reactChild) && reactChild.props) {
      totalChildren++;
      if (reactChild.props.value === toggleValue) {
        selectedIndex = index;
      }
    }
  });
  const isVertical = totalChildren >= 3;

  function clickHandler(value: any) {
    onChange(value);
  }

  const childrenMapped = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return child;
    }
    if (child.type === Option) {
      const { value } = child.props;
      const onClick = () => {
        clickHandler(value);
      };
      return React.cloneElement(child, {
        ...child.props,
        isVertical,
        onClick,
        "aria-selected": value === toggleValue,
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
        selectedIndex={selectedIndex}
        totalOptions={totalChildren}
        isVertical={isVertical}
      />
    </Wrapper>
  );
};

export default Toggle;
