import React, { useState } from "react";
import Logout from "../components/logout";
import axios from "axios";
import Auth from "../utils/auth";

export default function Post() {
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/posts", {
        message,
      });

      // Handle successful post creation
      console.log("New post created:", response.data);

      // Redirect to home or display success message
      // You can customize this based on your application flow
      window.location.assign("/home");
    } catch (error) {
      // Handle error
      console.error("Error creating post:", error);
    }
  };

  if (!Auth.loggedIn()) {
    console.log("Not logged in");
    return window.location.assign("/");
  } else {
    console.log("Logged in");
    return (
      <div className="App">
        <div className="m-2">
          <Logout />
          <a href="./home" className="m-2">
            <button className="btn btn-primary">Home</button>
          </a>
        </div>
        <h1>Blog Posts</h1>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <label>Post Content</label>
            <input
              type="text"
              name="blogPostContent"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="btn btn-success" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
