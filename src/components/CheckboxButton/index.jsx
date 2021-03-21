import { useState } from "react";
import { Wrapper, Icon } from "./index.styled";

const CheckboxButton = ({ actived, label }) => {
  const [active, setActive] = useState(actived ?? false);
  const handleCheck = () => {
    setActive(!active);
  };

  return (
    <Wrapper>
      <Icon checked={active} type="checkbox" onChange={() => handleCheck()} />
      {label}
    </Wrapper>
  );
};

export default CheckboxButton;
