import React from "react";
import imgPic from "../assets/400-MAN.svg";
export function InvalidRequest() {
  return (
    <div>
      <h1 className="text-center">Invalid Request</h1>
      <img
        src={imgPic}
        className="img-fluid rounded mx-auto d-block img-400"
        alt="400-Req"
      ></img>
    </div>
  );
}
