import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1050px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const List = styled.ul`
  &:nth-child(:first-child) {
    margin-right: auto;
  }
  @media (max-width: 1050px) {
    margin-bottom: 100px;
  }
`;
export const Item = styled.li`
  display: flex;
  margin-bottom: ${(props) => props.marginBottom};
  justify-content: ${(props) => props.justify ?? "flex-start"};
`;
export const ColorPreview = styled.span`
  display: block;
  min-width: 70px;
  height: 70px;
  border-radius: 6px;
  background-color: ${(props) => props.color};
  opacity: ${(props) => props.opacity};
`;
export const ColorData = styled.div`
  margin: 7px 0 7px 40px;
`;

export const ColorName = styled.h2`
  font-size: 19px;
  line-height: 28px;
  font-weight: 700;
`;
export const ColorValue = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 19px;
  line-height: 28px;
  font-weight: 400;
`;

export const Tag = styled.p`
  font-size: ${(props) => props.size};
  font-weight: 400;
  line-height: ${(props) => props.lineHeight};
  margin-right: 30px;
  color: #1f2041;
  opacity: 0.25;
  width: 37px;
  text-align: end;
`;
export const TextPreview = styled.p`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lineHeight};
  color: #1f2041;
  opacity: ${(props) => props.opacity};
  max-width: 377px;
`;
