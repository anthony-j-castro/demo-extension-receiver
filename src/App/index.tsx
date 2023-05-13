import React from "react";
import { Link, Outlet } from "@tanstack/router";
import { InnerBody, Header, Heading, List, ListItem, Content } from "./styled";

export default function App() {
  return (
    <InnerBody>
      <Header>
        <Heading>Demo Extension Receiver</Heading>
        <nav>
          <List>
            <ListItem>
              <Link to="/">Home</Link>
            </ListItem>
            <ListItem>
              <Link to="/recipe">Recipe Viewer</Link>
            </ListItem>
          </List>
        </nav>
      </Header>
      <Content>
        <Outlet />
      </Content>
    </InnerBody>
  );
}
