import React from "react";
import { Link, Outlet } from "@tanstack/router";
import {
  InnerBody,
  Header,
  Heading,
  Nav,
  List,
  ListItem,
  Content,
} from "./styled";

export default function App() {
  return (
    <InnerBody>
      <Header>
        <Heading>Demo Extension Receiver</Heading>
        <Nav>
          <List>
            <ListItem>
              <Link to="/">Home</Link>
            </ListItem>
            <ListItem>
              <Link to="/recipe">Recipe Importer</Link>
            </ListItem>
          </List>
        </Nav>
      </Header>
      <Content>
        <Outlet />
      </Content>
    </InnerBody>
  );
}
