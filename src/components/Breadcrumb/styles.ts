import styled from "styled-components";

export const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 14px;
  margin: 16px 0 16px 0;
  color: #666666;

  & > li:after {
    content: ">";
    padding: 0 8px;
  }
`;

export const ListItem = styled.li`
  display: inline-block;

  &:last-of-type:after {
    content: "";
    padding: 0;
  }
`;
