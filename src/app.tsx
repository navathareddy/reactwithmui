import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "./admin/drawer";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { AppBar, ThemeProvider, Toolbar } from "@material-ui/core";
import { theme } from "./theme";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Switch, Route, Link, BrowserRouter, Redirect } from "react-router-dom";
import Home from "./home";
import Text from "./test";
import MenuBar from "./menu";
import Menu1 from "./menu1";
import Menu2 from "./menu2";
import Menu3 from "./menu3";


const App: React.FC = () => {
  const allTabs = ["/", "/tab2", "/tab3"];
  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>Flash P&L </Toolbar>{" "}
        </AppBar>
        <BrowserRouter>
          <MenuBar></MenuBar>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/dashboard" component={Drawer} />
              <Route exact path="/test" component={Text} />
              <Route exact path="/menu1" component={Menu1} />
              <Route exact path="/menu2" component={Menu2} />
              <Route exact path="/menu3" component={Menu3} />
            </Switch>
          </div>
        </BrowserRouter>
      </ThemeProvider>
      <CssBaseline />

      {/* <div> <Drawer></Drawer></div>  */}
    </div>
  );
};
export default App;
