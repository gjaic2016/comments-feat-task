import React from "react";

const Comment = (props) => {
  const formatTimestamp = (timestamp) => {
    let newDate = new Date(timestamp);
    let formatedTime = newDate.toLocaleTimeString();
    return formatedTime;
  };

  return (
    <>
      <div className="message">
        <div className="message__column">
          <div className="message__img">
            <img
              src={props.authorPicture}
              className="avatar-logo"
              alt={props.authorPicture}
            />
          </div>
        </div>
        <div className="message__column2">
          <div className="message__content">
            <div className="message__username">{props.authorName}</div>
            <div className="message__text">{props.text}</div>
          </div>
          <div className="message__time-reply">
            <div>{formatTimestamp(props.timestamp)}</div>
            <div className="message__reply">
              <a type="link">Reply</a>{" "}
              {props.reply > 0 ? "(" + props.reply + ")" : ""}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
