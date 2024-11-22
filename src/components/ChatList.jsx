//import chats from "../mocks/chats";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";
/* mapea los chats que está en los mocks/chats.js y los muestra en la lista de chats  
debes pensar donde hacer el fetch, si pasarlo como props... pero no lo dejes como variable global
*/
/* eslint-disable react/prop-types */
function ChatList({ onSelectChat }) {
  const [chats, setChats] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: { "User-Agent": "insomnia/10.1.0" },
    };

    fetch(
      "https://xsffmkqgakjtfqhxqxyc.supabase.co/rest/v1/usuarios?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzZmZta3FnYWtqdGZxaHhxeHljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg0MDI4NTcsImV4cCI6MjA0Mzk3ODg1N30.t9RppVkCE2PuaHgLjjOoh5eg1wW_ExtLGnRjYsdf_VA&select=*",
      options
    )
      .then((response) => response.json())
      .then((response) => setChats(response));
  }, []);
  return (
    <div className="chat-list">
      {chats.map((chat) => (
        <div
          key={chat.id}
          className="chat-item"
          onClick={() => onSelectChat(chat)}
        >
          <div className="chat-container">
            {chat.avatar ? (
              <Avatar src={chat.avatar} alt={chat.name} />
            ) : (
              <Avatar>{chat.name.charAt(0).toUpperCase()}</Avatar>
            )}

            <div className="chat-info">
              <h4>{chat.name}</h4>
              <p>{chat.lastMessage}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatList;
