import React from "react";

function Header({ loggedIn, handleLoggedInClick, handleFontSizeClick, btnText }) {
  return (
    <div>
      <button onClick={handleLoggedInClick}>
        {loggedIn ? "Log Out" : "Log In"}
      </button>
      <button onClick={handleFontSizeClick}>{btnText}</button>
    </div>
  );
}

export default Header;
