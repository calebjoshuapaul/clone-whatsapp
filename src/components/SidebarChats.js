import React, { useEffect, useState } from "react";
import "./SidebarChats.css";
import { Avatar } from "@mui/material";

function SidebarChats({ addNewChat }) {
  const [seed, setSeed] = useState("");

  const createChat = () => {
    const roomName = prompt("Enter a name to create chat room.");

    if (roomName) {
      //database stuff...
    }
  };

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return !addNewChat ? (
    <div className="chats">
      <div className="chats__Avatar">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      </div>
      <div className="chat__person">
        <div className="chat__name">
          <h3>Name</h3>
        </div>
        <div className="chat__message">
          <p>Chats....</p>
        </div>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="chats__addNew">
      <h3>Add new chat</h3>
    </div>
  );
}

export default SidebarChats;
