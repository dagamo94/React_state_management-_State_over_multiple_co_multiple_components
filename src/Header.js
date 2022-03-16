import React from "react";

function Header({ loggedIn, handleLoggedInClick, btnText }) {
  return (
    <div>
      <button onClick={handleLoggedInClick}>
        {loggedIn ? "Log Out" : "Log In"}
      </button>
      <button>{btnText}</button>
    </div>
  );
}

export default Header;
