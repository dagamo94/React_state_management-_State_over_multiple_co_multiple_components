import React, { useState } from "react";
import Content from "./Content";
import Header from "./Header";

/*
Instructions
Add a button to the header which increases the font size of the content. Initialize the font size to 12 and increase it by 2 with each button click.

Specific instructions
The button should be after the login button
Within the App component, store the font size as a state variable. The font size will in turn have to be passed to the Content component, which renders the content for the app, via a prop called fontSize.

For the tests to pass, make sure you use Increase Font size when declaring the font size button (e.g., <button onClick={handleFontSizeIncrease}>Increase Font Size</button>).
*/


function App() {
  const [fontSize, setFontSize] = useState(12);
  const [loggedIn, setLoggedIn] = useState(false);
  const toggleLoggedIn = () => setLoggedIn(!loggedIn);
  const fontSizeIncrease = () => setFontSize(currSize => currSize + 1);
  return (
    <div>
      <Header loggedIn={loggedIn} handleLoggedInClick={toggleLoggedIn} handleFontSizeClick={fontSizeIncrease} btnText="Increase Font Size" />
      <Content loggedIn={loggedIn} />
    </div>
  );
}

export default App;
