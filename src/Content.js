import React from "react";

function Content({ loggedIn, fontSize }) {
  console.log("Header Font Size: " + fontSize);

  return loggedIn && <p style={{fontSize: `${fontSize}px`, fontFamily: "cursive"}}>CONTENT</p>;
}

export default Content;
