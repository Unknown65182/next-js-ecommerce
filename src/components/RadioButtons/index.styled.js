import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: var(--dark-shade-75);
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 20px;
  }
`;
export const Icon = styled.input`
  appearance: none;
  position: relative;
  display: inline-block;
  margin-right: 10px;
  min-width: 20px;
  height: 20px;
  background: var(--white);
  border: 1px solid var(--dark-shade-25);
  border-radius: 50%;
  outline: none;
  cursor: pointer;

  &:before {
    content: "";
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 12px;
    height: 12px;
    border-radius: 10px;
    background-image: none;
    transform: translate3d(-50%, -50%, 0) rotate(-45deg);
  }

  &:checked:before {
    background-image: linear-gradient(var(--purple), var(--blue));
  }
  &:checked {
    border: 1px solid var(--dark-shade-25);
  }
`;
