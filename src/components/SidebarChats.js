import React, { useEffect, useState } from "react";
import "./SidebarChats.css";
import { Avatar } from "@mui/material";
import db from "../firebaseConfig";
import { Link } from "react-router-dom";

function SidebarChats({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");

  const createChat = () => {
    const roomName = prompt("Enter a name to create chat room.");

    if (roomName) {
      //database stuff...
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  useEffect(() => {
    setSeed(id);
  }, []);

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebar__chats">
        <div className="sidebar__chats__Avatar">
          <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        </div>
        <div className="sidebar__chat__person">
          <div className="sidebar__chat__name">
            <h3>{name}</h3>
          </div>
          <div className="sidebar__chat__message">
            <p>Chats....</p>
          </div>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebar__chats__addNew">
      <h3>Add new chat</h3>
    </div>
  );
}

export default SidebarChats;
