import styled from "styled-components";

export const Wrapper = styled.label`
  display: flex;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: var(--dark-shade-75);
  cursor: pointer;
`;
export const Toggle = styled.input`
  appearance: none;
  position: relative;
  margin-right: 10px;
  margin-top: 4px;
  display: inline-block;
  min-width: 40px;
  height: 20px;
  background: var(--white);
  border: 1px solid var(--dark-shade-25);
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
    background-image: linear-gradient(
      var(--dark-shade-25),
      var(--dark-shade-25)
    );
    border-radius: 50%;
    transform: translate3d(0, -50%, 0);
    transition: background-image 0.2s ease-in-out, transform 0.2s ease-in-out;
  }

  &:checked:after {
    transform: translate3d(calc(100% + 7px), -50%, 0);
    background-image: linear-gradient(var(--purple), var(--blue));
  }
  &:checked {
    border: 1px solid var(--purple);
  }
`;
