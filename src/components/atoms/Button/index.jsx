import { Wrapper } from "./index.styled";

const Button = ({ children, outlined, actioned }) => {
  return (
    <Wrapper outlined={outlined ?? false} actioned={actioned ?? false}>
      {children}
      {actioned && <span className="material-icons">arrow_forward</span>}
    </Wrapper>
  );
};

export default Button;
