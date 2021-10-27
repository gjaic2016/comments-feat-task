import React from "react";

const Comment = (props) => {

  
  const formatTimestamp = (timestamp) => {
    let newDate = new Date(timestamp);
    console.log(newDate);
    let formatedTime = newDate.toLocaleTimeString();
    return formatedTime;
  };

  return (
    <>
      <div className="message">
        <div className="message__column">
          <div className="message__img">
            <img
              // src={avatarSort(images,props.authorPicture)}
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
            <div className="message__reply">Reply</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
