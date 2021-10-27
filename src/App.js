import "./App.css";
import jsonFile from "../src/Data/comments.json";
import Comment from "../src/Components/Comment";
import NewMessage from './Components/NewMessage';

function App() {
  const message = jsonFile.data.comments;

  return (
    <div className="App">
      <div className="App-body">
        <div className="chat_window">
          <div className="message__date">Monday, 11.12.2021.</div>
          {message.map((value) => {
            return (
              <>
                <Comment
                  key={value.id}
                  id={value.id}
                  authorName={value.author.name}
                  authorPicture={value.author.picture}
                  text={value.text}
                  timestamp={value.timestamp}
                />
              </>
            );
          })}
          <NewMessage/>
        </div>
      </div>
    </div>
  );
}

export default App;
