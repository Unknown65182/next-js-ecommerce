import styled from "styled-components";

export const Wrapper = styled.label`
  display: flex;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--dark-shade-50);
  cursor: pointer;
`;

export const Icon = styled.input`
  appearance: none;
  position: relative;
  margin-right: 10px;
  min-width: 20px;
  height: 20px;
  background: var(--white);
  border: 1px solid var(--dark-shade-25);
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  transition: background-image 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:before {
    content: "";
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 8px;
    height: 6px;
    transform: translate3d(-50%, -50%, 0) rotate(-45deg);
    transition: background-image 0.2s ease-in-out, transform 0.2s ease-in-out;
  }

  &:after {
    content: "";
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 6px;
    height: 4px;
    background-color: var(--white);
    transform: translate3d(-50%, -90%, 0) rotate(-45deg);
  }

  &:checked:before {
    background-image: linear-gradient(to left, var(--purple), var(--blue));
  }
  &:checked {
    border: 1px solid var(--purple);
  }
`;
