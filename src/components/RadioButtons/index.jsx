import { useState } from "react";
import { Wrapper, Icon, Label } from "./index.styled";

const RadioButtons = ({ name, values }) => {
  const [active, setActive] = useState("");
  const handleCheck = (value) => {
    setActive(value);
  };

  return (
    <Wrapper>
      {values &&
        values.map((value, index) => (
          <Label key={`${value}_${index}`}>
            <Icon
              name={name}
              value={value}
              checked={active === value}
              type="radio"
              onChange={() => handleCheck(value)}
            />
            {value}
          </Label>
        ))}
    </Wrapper>
  );
};

export default RadioButtons;
