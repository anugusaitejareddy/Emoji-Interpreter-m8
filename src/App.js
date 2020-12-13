import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var emojiDictionary = {
    "😊": "Smiling",
    "😳": "Disbelief",
    "😢": "Sad",
    "🤡": "Clown",
    "🤧": "Sneezing",
    "🤤": "Drooling",
    "😲": "Astonished",
    "🤓": "Nerd",
    "😒": "Unamused",
    "😉": "winking"
  };

  var emojisWeKnow = Object.keys(emojiDictionary);

  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    const emojiMeaning = emojiDictionary[event.target.value];
    if (emojiMeaning === undefined) {
      var meaning = "We don't have this in our database";
    } else {
      meaning = emojiMeaning;
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h2>emojis we know</h2>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ padding: ".3rem", fontSize: "2rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
