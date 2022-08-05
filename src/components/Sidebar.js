import React from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@mui/material";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import SidebarChats from "./SidebarChats";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__headerLeft">
          <Avatar />
        </div>
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchIcon />
          <input
            type="text"
            className="sidebar__searchInput"
            placeholder="Search..."
          ></input>
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChats addNewChat />
        <SidebarChats />
        <SidebarChats />
      </div>
    </div>
  );
}

export default Sidebar;
