import React from "react";
import Auth from "../utils/auth";

export default function Init() {
  if (Auth.loggedIn()) {
    console.log(Auth.loggedIn);
    return window.location.assign("/home");
  } else {
    return (
      <div className="m-2">
        <h1 className="display-1 d-flex justify-content-center">
          Coopick social media app
        </h1>
        <div className="d-flex justify-content-center">
          <a href="./login" className="m-2">
            <button className="btn btn-primary btn-lg">Login</button>
          </a>
          <a href="./signup" className="m-2">
            <button className="btn btn-primary btn-lg">Sign Up</button>
          </a>
        </div>
      </div>
    );
  }
}
