import React from "react";

import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import OtherMessage from "./OtherMessage";

function ChatFeed(props) {
  const { chats, activeChat, userName, messages } = props;

  const chat = chat && chats[activeChat]; //looking for active chats

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1]; //if there are messages, finding the last one
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMessage ? <MyMessage /> : <OtherMessage />}
          </div>
          <div
            className="read-receipts"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}
          >
            read-receipts
          </div>
        </div>
      );
    });
  };

  if (!chat) {
    return "Loading";
  }

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) => {
            return ` ${person.person.username}`;
          })}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: "100ps" }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
}
export default ChatFeed;
