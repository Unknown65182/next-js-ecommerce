import { useState } from "react";
import { Wrapper, Toggle, Label } from "./index.styled";

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
        id="toggle-button"
        onChange={() => handleToggle()}
      />
      <Label htmlFor="toggle-button">{label}</Label>
    </Wrapper>
  );
};

export default ToggleButton;
