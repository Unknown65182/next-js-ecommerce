import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Toggle = styled.input`
  appearance: none;
  position: relative;
  display: inline-block;
  min-width: 40px;
  height: 20px;
  background: #fff;
  border: 1px solid var(--dark-shade);
  opacity: 25%;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  transition: background-image 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:after {
    content: "";
    display: inline-block;
    position: absolute;
    left: 4px;
    top: 50%;
    width: 12px;
    height: 12px;
    background-image: linear-gradient(var(--dark-shade), var(--dark-shade));
    opacity: 25%;
    border-radius: 50%;
    transform: translate3d(0, -50%, 0);
    transition: background-image 0.2s ease-in-out, transform 0.2s ease-in-out,
      opacity 0.2s ease-in-out;
  }

  &:checked:after {
    transform: translate3d(calc(100% + 7px), -50%, 0);
    background-image: linear-gradient(var(--purple), #8ba4f9);
    opacity: 100%;
  }
  &:checked {
    border: 1px solid var(--purple);
    opacity: 100%;
  }
`;
export const Label = styled.label`
  margin-left: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: var(--dark-shade);
  opacity: 75%;
  cursor: pointer;
`;
