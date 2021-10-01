import React from "react";
import "./HeaderInfo.css";

function HeaderInfo() {
  return (
    <div className="container">
      <div className="containerInfo">
        <h1>A moder publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
      </div>
      <div className="button">
        <button className="startFree">Start for Free</button>
        <button className="moreInfo">Learn More</button>
      </div>
    </div>
  );
}

export { HeaderInfo };
