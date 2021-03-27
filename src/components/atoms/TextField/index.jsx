import { Input } from "./index.styled";

const TextField = ({ name, placeholder }) => {
  return <Input name={name ?? "input"} type="text" placeholder={placeholder} />;
};

export default TextField;
