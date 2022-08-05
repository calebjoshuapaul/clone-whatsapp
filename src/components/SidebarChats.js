import React, { useEffect, useState } from "react";
import "./SidebarChats.css";
import { Avatar } from "@mui/material";
import db from "../firebaseConfig";
import { Link } from "react-router-dom";

function SidebarChats({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState([]);

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
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
    setSeed(id);
  }, [id]);

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
            <p>{messages[messages.length - 1]?.message}</p>
          </div>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebar__chats__addNew">
      <h3>Add a new chat room</h3>
    </div>
  );
}

export default SidebarChats;
