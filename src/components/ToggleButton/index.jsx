import { useState } from "react";
import _uniqueId from "lodash/uniqueId";
import { Wrapper, Toggle, Label } from "./index.styled";

const ToggleButton = ({ actived, label }) => {
  const [id] = useState(() => _uniqueId("toggle_id_"));
  const [active, setActive] = useState(actived ?? false);
  const handleToggle = () => {
    setActive(!active);
  };
  return (
    <Wrapper>
      <Toggle
        checked={active}
        type="checkbox"
        id={id}
        onChange={() => handleToggle()}
      />
      <Label htmlFor={id}>{label}</Label>
    </Wrapper>
  );
};

export default ToggleButton;
