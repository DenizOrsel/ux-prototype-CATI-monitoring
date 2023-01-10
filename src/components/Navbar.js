import React from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  tabContainer: {},
  tabLabel: {
    color: "white",
  },
}));

const Navbar = () => {
  const classes = useStyles();

    const [value, setValue] = useState(2);

    function handleChange(event, newValue) {
      setValue(newValue);
    }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          className={classes.tabContainer}
        >
          <Tab label="Surveys" className={classes.tabLabel} disabled />
          <Tab label="Access" className={classes.tabLabel} disabled />
          <Tab label="Monitoring" className={classes.tabLabel} />
        </Tabs>
      </AppBar>
    </div>
  );
};

export default Navbar;
