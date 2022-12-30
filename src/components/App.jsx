import React from "react";

import Entry from "../components/Entry";
import emojipedia from "../emojipedia";

function createEntry(emoji) {
  return (
    <Entry
      key={emoji.id}
      id={emoji.id}
      icon={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
      email={emoji.email}
    />
  );
}

function App() {
  return emojipedia.map(createEntry);
}

export default App;
