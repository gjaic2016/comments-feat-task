import React from "react";
import Button from "react-bootstrap/Button";
import sendImg from "../img/send.png";

const NewMessage = () => {
  return (
    <div className="new__message">
      <Button className="button__new">
        <img
          className="button__positive"
          src="https://img.icons8.com/small/16/000000/plus-math.png"
        />
      </Button>
      <input className="message__input" type="text" />
      <Button className="button__send">
        <img className="send__image" src={sendImg} alt="send" />
        Send message
      </Button>
    </div>
  );
};

export default NewMessage;
