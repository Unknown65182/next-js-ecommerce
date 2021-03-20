import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Icon = styled.input`
  appearance: none;
  position: relative;
  display: inline-block;
  min-width: 20px;
  height: 20px;
  background: #fff;
  border: 1px solid var(--dark-shade);
  opacity: 25%;
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
    opacity: 0%;
    transform: translate3d(-50%, -50%, 0) rotate(-45deg);
    transition: background-image 0.2s ease-in-out, transform 0.2s ease-in-out,
      opacity 0.2s ease-in-out;
  }

  &:after {
    content: "";
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 6px;
    height: 4px;
    background-color: #fff;
    transform: translate3d(-50%, -90%, 0) rotate(-45deg);
  }

  &:checked:before {
    background-image: linear-gradient(to right, var(--purple), #8ba4f9);
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
  line-height: 18px;
  color: var(--dark-shade);
  opacity: 50%;
  cursor: pointer;
`;
