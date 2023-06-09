import React, { useContext } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { ContextConstant } from "../context/Context.jsx";
import Box from "@mui/material/Box";

export default function ChannelTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { darkMode } = useContext(ContextConstant);

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      TabIndicatorProps={{
        style: {
          backgroundColor: darkMode ? "#FFFFFF" : "#606060",
        },
      }}
      textColor="inherit"
      scrollButtons="auto"
    >
      <Tab
        label="HOME"
        sx={{
          fontSize: "14px",
          marginRight: "25px",
          fontWeight: "bold",
        }}
      />
      <Tab
        label="VIDEOS"
        sx={{
          fontSize: "14px",
          marginRight: "25px",
          fontWeight: "bold",
        }}
      />
      <Tab
        label="SHORTS"
        sx={{
          fontSize: "14px",
          marginRight: "25px",
          fontWeight: "bold",
        }}
      />
      <Tab
        label="LIVE"
        sx={{
          fontSize: "14px",
          marginRight: "25px",
          fontWeight: "bold",
        }}
      />
      <Tab
        label="PODCASTS"
        sx={{
          fontSize: "14px",
          marginRight: "25px",
          fontWeight: "bold",
        }}
      />
      <Tab
        label="PLAYLISTS"
        sx={{
          fontSize: "14px",
          marginRight: "25px",
          fontWeight: "bold",
        }}
      />
      <Tab
        label="COMMUNITY"
        sx={{
          fontSize: "14px",
          marginRight: "25px",
          fontWeight: "bold",
        }}
      />
      <Tab
        label="CHANNEL"
        sx={{
          fontSize: "14px",
          marginRight: "25px",
          fontWeight: "bold",
        }}
      />
      <Tab
        label="ABOUT"
        sx={{
          fontSize: "14px",
          marginRight: "25px",
          fontWeight: "bold",
        }}
      />
    </Tabs>
  );
}
