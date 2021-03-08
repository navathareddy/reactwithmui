import React, { Fragment, FC, useEffect } from "react";
import ReactDOM from "react-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Switch, Route, Link, BrowserRouter, Redirect } from "react-router-dom";
import { Divider } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const MenuBar: FC = () => {
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  // const allTabs = ["/", "/tab2", "/tab3"];
  const routes = [
    { name: "Home", path: "/" },
    { name: "DashBoard", path: "/dashboard" },
    {
      name: "Test",
      path: "/test",
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      click: (event: React.MouseEvent<HTMLButtonElement>) => handleClick(event),
    },
  ];

  useEffect(() => {
    if (window.location.pathname === "/" && value != 0) {
      setValue(0);
    } else if (window.location.pathname === "/dashboard" && value !== 1)
      setValue(1);
    else if (window.location.pathname === "/test" && value !== 2) setValue(2);
  }, [value]);
  return (
    <Fragment>
      <Tabs value={value} onChange={handleChange} indicatorColor="primary">
        <Tab label="Home" component={Link} to="/"></Tab>
        <Tab label="Dashboard" component={Link} to="/dashboard"></Tab>
        <Tab
          label="Test"
          component={Link}
          to="/test"
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup={anchorEl ? "true" : undefined}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            handleClick(event)
          }
          onMouseOver={(event: React.MouseEvent<HTMLButtonElement>) =>
            handleClick(event)
          }
        ></Tab>
      </Tabs>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            setValue(2);
          }}
          component={Link}
          to="/menu1"
        >
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/menu2">
          My account
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/menu3">
          Logout
        </MenuItem>
      </Menu>
    </Fragment>
  );
  // return (
  //   <React.Fragment>
  //     <Tabs value={value} onChange={handleChange} indicatorColor="primary">
  //       <Tab label="Home" component={Link} to="/"></Tab>
  //       <Tab label="Dashboard" component={Link} to="/dashboard"></Tab>
  //       <Tab label="Test" component={Link} to="/test"></Tab>
  //     </Tabs>
  //   </React.Fragment>
  // );
};

export default MenuBar;
