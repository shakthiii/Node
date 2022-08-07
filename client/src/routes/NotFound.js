import React from "react";
import { useNavigate } from "react-router-dom";
import imgPic from "../assets/404-MAN-NEW.svg";
export function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-center">Not found</h1>;
      <img
        src={imgPic}
        className="img-fluid rounded mx-auto d-block img-400"
        alt="404-Req"
      ></img>
      <button
        type="button"
        className="btn btn-warning mx-auto d-block btn-404"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
    </div>
  );
}
