import React from "react";
import chess from "/src/assets/image-chess.webp";
import "./notification.css";

const ImageNotif = (props) => {
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
      </div>
      <div className="md:absolute right-2 cursor-pointer">
        <img src={chess} alt="" className="w-[40px]" /> {/* Boyutu artır */}
      </div>
    </div>
  );
};

export default ImageNotif;
