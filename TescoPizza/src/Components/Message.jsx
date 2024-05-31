import React from "react";
import "./notification.css";

const Message = (props) => {
  return (
    <div className="notification-item unread">
      <img src={props.img} alt="" />
      <div className="flex flex-col">
        <h3>
          <span className="name links">{props.name} </span>
          {props.action}
          <span className="action links"> {props.post}</span>
        </h3>
        <p>{props.time} ago</p>
        <div className="message-box msg">
          <p className="message-text">
          Sayın abicim trafikte kaldığım için gecikiyorum. 7 dakika içerisinde kapınızdayım.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Message;
