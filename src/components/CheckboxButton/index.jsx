import { useState } from "react";
import _uniqueId from "lodash/uniqueId";
import { Wrapper, Icon, Label } from "./index.styled";

const CheckboxButton = ({ actived, label }) => {
  const [id] = useState(() => _uniqueId("checkbox_id_"));
  const [active, setActive] = useState(actived ?? false);
  const handleCheck = () => {
    setActive(!active);
  };

  return (
    <Wrapper>
      <Icon
        checked={active}
        type="checkbox"
        id={id}
        onChange={() => handleCheck()}
      />
      <Label htmlFor={id}>{label}</Label>
    </Wrapper>
  );
};

export default CheckboxButton;
