import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const Icon = styled.span`
  display: block;
  max-width: 24px;
  max-height: 24px;
  overflow: hidden;
  background: linear-gradient(var(--purple), var(--blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
`;
