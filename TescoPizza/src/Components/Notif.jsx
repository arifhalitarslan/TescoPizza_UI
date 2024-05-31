import React from "react";
import "./notification.css";

const Notif = (props) => {
  return (
    <div className="notification-item unread">
      <img src={props.img} alt="" />
      <div className="flex flex-col max-w-[400px]">
        <h3>
          <span className="name links">{props.name} </span>
          {props.action}
          <span className="action links"> {props.post} </span>
          <span className="circle">{props.circle}</span>
        </h3>
        <p>{props.time} ago</p>
      </div>
    </div>
  );
};

export default Notif;
