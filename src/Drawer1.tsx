import React from "react";
import {  Drawer as MUIDrawer,  ListItem,  List,  ListItemText,} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  drawer: {
    width: "190px",
  },
});

const Drawer = () => {
  const classes = useStyles();
  const itemsList = [
    {
      text: "about",
    },
    {
      text: "contact",
    },
  ];
  return (
    <MUIDrawer variant="permanent" className={classes.drawer}>
      <List>
        {itemsList.map((item, index) => {
          const { text } = item;
          return (
            <ListItem button key={text} component={Link} to={"/" + text}>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
};

export default withRouter(Drawer);
