import "./App.css";
import jsonFile from "../src/Data/comments.json";
import Comment from "../src/Components/Comment";
import NewMessage from "./Components/NewMessage";

function App() {
  const message = jsonFile.data.comments;

  const checkReply = (message, id) => {
    let reply = 0;

    message.forEach((element) => {
      if (element.parent_id === id) {
        reply++;
      }
    });
    return reply;
  };

  const isReply = (parent) => {
    let hasReply = false;

    if (parent) {
      hasReply = !hasReply;
    }
    return hasReply;
  };

  const messageDate = (message) => {
    let options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    var timestamp = message.find((element) => element.id === "1").timestamp;
    var day = new Date(timestamp).toLocaleDateString("en-US", options);
    return day;
  };

  return (
    <div className="App">
      <div className="App-body">
        <div className="chat_window">
          <div className="message__date">{messageDate(message)}</div>
          {message.map((value) => {
            return (
              <>
                <Comment
                  key={value.id}
                  id={value.id}
                  reply={checkReply(message, value.id)}
                  authorName={value.author.name}
                  authorPicture={value.author.picture}
                  text={value.text}
                  timestamp={value.timestamp}
                  replied={isReply(value.parent_id)}
                />
              </>
            );
          })}
          <NewMessage />
        </div>
      </div>
    </div>
  );
}

export default App;
