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

  return (
    <div className="App">
      <div className="App-body">
        <div className="chat_window">
          {message.map((value) => {
            return (
              <>
                <Comment
                  day={showDay(value.timestamp)}
                  key={value.id}
                  id={value.id}
                  reply={checkReply(message, value.id, value.timestamp)}
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
