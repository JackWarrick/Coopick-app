import React from "react";
import Auth from "../utils/auth";

export default function Homepage() {
  if (!Auth.loggedIn()) {
    console.log(Auth.loggedIn);
    return window.location.assign("/init");
  } else {
    return (
      <div className="m-2">
        <h1 className="display-1 d-flex justify-content-center">
          Coopick social media app
        </h1>

        <a href="./post" className="m-2">
          <button className="btn btn-primary">Make a Post!</button>
        </a>

        <div className="d-flex justify-content-center">
          <h3>Posts</h3>
        </div>
      </div>
    );
  }
}
