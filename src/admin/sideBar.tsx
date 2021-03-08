import { ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

export default function SidebarExample() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "20%",
            height: "100%",
            background: "#f0f0f0",
          }}
        >
          <ListItem button key="Dashboard" component={NavLink} to="/contact">
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button key="Dashboard" component={NavLink} to="/about">
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button key="Dashboard" component={NavLink} to="/contact">
            <ListItemText primary="Dashboard" />
          </ListItem>
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
