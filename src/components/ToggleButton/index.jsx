import { useState } from "react";
import { Wrapper, Toggle } from "./index.styled";

const ToggleButton = ({ actived, label }) => {
  const [active, setActive] = useState(actived ?? false);
  const handleToggle = () => {
    setActive(!active);
  };
  return (
    <Wrapper>
      <Toggle
        checked={active}
        type="checkbox"
        onChange={() => handleToggle()}
      />
      {label}
    </Wrapper>
  );
};

export default ToggleButton;
