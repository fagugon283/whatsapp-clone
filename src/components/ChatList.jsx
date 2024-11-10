import chats from "../mocks/chats";
import Avatar from "@mui/material/Avatar";

/* mapea los chats que está en los mocks/chats.js y los muestra en la lista de chats  
debes pensar donde hacer el fetch, si pasarlo como props... pero no lo dejes como variable global
*/
/* eslint-disable react/prop-types */
function ChatList({ onSelectChat }) {
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
