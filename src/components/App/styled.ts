import styled from "styled-components";

export const InnerBody = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid #202124;
`;

export const Heading = styled.h1`
  font-size: 24px;
  margin: 0;
`;

export const Nav = styled.nav`
  flex-shrink: 0;
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0 0 0 48px;
  padding: 0;
`;

export const ListItem = styled.li`
  margin: 0 8px;
`;

export const Content = styled.div`
  flex: 1;
  margin-top: 48px;
`;
