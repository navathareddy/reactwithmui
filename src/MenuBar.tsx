import React from "react";
import "./styles.css";
import Home from "./Home";
import Contact from "./admin/Contact";
import About from "./admin/About";
import { Route, Switch } from "react-router-dom";
import Drawer1 from "./Drawer1";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Drawer1 />
      <Switch>
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
}
