import React from "react";
import Logout from "../components/logout";
//import profilepic from '../../assets/me.jpeg';
//import "../../styles/about.css"
import { Button } from "react-bootstrap";
import Auth from "../utils/auth";

export default function Post() {
  if (!Auth.loggedIn()) {
    console.log("Not logged in");
    return window.location.assign("/");
  } else {
    console.log("Logged in");
    return (
      <div className="App">
        <div>
          <Logout />
          <a href="./home" className="m-2">
            <button className="btn btn-primary">Homepage</button>
          </a>
        </div>
        <h1>Blog Posts</h1>
        <div className="form">
          <label>Post title</label>
          <input type="text" name="blogPostTitle"></input>
          <label>Post content</label>
          <input type="text" name="blogPostContent"></input>
          <Button>Submit</Button>
        </div>
      </div>
    );
  }
}
