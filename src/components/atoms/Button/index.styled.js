import styled from "styled-components";

export const Wrapper = styled.button`
  width: ${(props) => (props.actioned ? "100%" : "max-content")};
  background-image: ${(props) =>
    props.outlined
      ? "linear-gradient(var(--white), var(--white))"
      : "linear-gradient(var(--purple), var(--blue))"};
  border: 2px solid var(--purple);
  border-radius: 22px;

  padding: 12px 18px 13px;

  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: ${(props) => (props.outlined ? "var(--purple)" : "var(--white)")};

  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  transition: all 0.1s ease-in-out;

  & > span {
    position: absolute;
    width: 44px;
    height: 44px;
    overflow: hidden;
    top: 50%;
    right: 0;
    transform: translate3d(0, -50%, 0);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    opacity: 0.5;
    color: ${(props) =>
      props.outlined ? "var(--dark-shade-50)" : "var(--white)"};
  }
`;
