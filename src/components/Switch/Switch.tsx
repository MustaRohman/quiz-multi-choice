import React, { FC } from "react";
import { SelectedOutline, Wrapper, Option } from "./Switch.styles";

interface Props {
  value: boolean;
  onChange: (value: any) => {};
}

const Switch: FC<Props> = ({ value, onChange, children }) => {
  let selectedIndex = 0;
  const childrenArray = React.Children.toArray(children);
  childrenArray.forEach((child, index) => {
    const reactChild = child as { props: { value: any } };
    if (React.isValidElement(reactChild) && reactChild.props) {
      console.log(reactChild.props);
      if (reactChild.props.value === value) {
        selectedIndex = index;
      }
    }
  });

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
        onClick,
      });
    }
  });

  return (
    <Wrapper>
      {childrenMapped}
      <SelectedOutline selectedIndex={selectedIndex} />
    </Wrapper>
  );
};

export default Switch;
