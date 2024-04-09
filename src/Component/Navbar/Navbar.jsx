/* eslint-disable no-unused-vars */
import React, { useReducer } from "react";
import "./navbar.css";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../../assets/images";

const defaultOptions = {
  openMenu: false,
};

const reducer = (state, action) => {
  if (action.type === "OPEN_MENU") {
    return { ...state, openMenu: true };
  }
  if (action.type === "CLOSE_MENU") {
    return { ...state, openMenu: false };
  }
  return state;
};

const Navbar = () => {
  const [state, dispatch] = useReducer(reducer, defaultOptions);

  const menuOptions = [
    {
      text: "Growth Potential",
      url: "/growth",
    },
    {
      text: "Tokenomics",
      url: "/tokenomics",
    },
    {
      text: "How to Buy",
      url: "/",
    },
    {
      text: "Faq",
      url: "faq",
    },
  ];

  return (
    <>
      <nav>
        <div className="navbar">
          <Link
            className="logo"
            to="/"
            style={{
              textDecoration: "none",
              display: "flex",
            }}
          >
            <img src={logo} alt="" />
            <p className="logo-name">AdetInCode</p>
          </Link>
          <div className="navbar-content">
            {menuOptions.map((item) => (
              <Link key={item.text} to={item.url}>
                {item.text}
              </Link>
            ))}
          </div>
          <div className="first-button">
            <button className="yellow">WIN 50,000</button>
          </div>
          <div className="second-button">
            <button className="connect">CONNECT WALLET</button>
          </div>
          <div className="outline">
            <HiOutlineBars3 onClick={() => dispatch({ type: "OPEN_MENU" })} />
          </div>
          <Drawer
            open={state.openMenu}
            onClose={() => dispatch({ type: "CLOSE_MENU" })}
            anchor="right"
          >
            <Box sx={{ width: 250 }} role="presentation">
              <List>
                {menuOptions.map((item) => (
                  <ListItem key={item.text} disablePadding>
                    <ListItemButton component={Link} to={item.url}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
