import "./App.css";
import jsonFile from "../src/Data/comments.json";
import Comment from "../src/Components/Comment";
import NewMessage from "./Components/NewMessage";

function App() {
  const message = jsonFile.data.comments;

  const checkReply = (message, id, timestamp) => {
    let reply = 0;

    message.forEach((element) => {
      if (element.parent_id === id && element.timestamp > timestamp) {
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

  let dayToCheck = "";
  const showDay = (timestamp) => {
    
    var day = new Date(timestamp).toLocaleDateString("hr-HR", {
      weekday: "long",
      year: "numeric",
      month: "2-digit",
      day: "numeric",
    });
    
    
    if (dayToCheck === day) {
      return "";
    } else {
      if(dayToCheck > day) {
        return "Danas";
      }
      else {
        dayToCheck = day;
        return day;
      }
    }
  };

  let messagesArr = [];
  const recursion = (comments) => {
    if (comments.length === 0) {
      return;
    }
    
    const myMessage = comments[0];
    messagesArr.push({
      key: myMessage.id,
      id: myMessage.id,
      reply: checkReply(message, myMessage.id),
      authorName: myMessage.author.name,
      authorPicture: myMessage.author.picture,
      text: myMessage.text,
      timestamp: myMessage.timestamp,
      replied: isReply(myMessage.parent_id)
    });

    recursion(comments.slice(1));
  };

  recursion(message);

  return (
    <div className="App">
      <div className="App-body">
        <div className="chat_window">
          {messagesArr.map((value) => {
            return (
              <>
                <Comment
                  day={showDay(value.timestamp)}
                  key={value.id}
                  id={value.id}
                  reply={value.reply}
                  authorName={value.authorName}
                  authorPicture={value.authorPicture}
                  text={value.text}
                  timestamp={value.timestamp}
                  replied={value.replied}
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
