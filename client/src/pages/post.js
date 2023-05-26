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
    return (
      <div className="App">
        <div className="m-2 d-flex justify-content-between">
          <Logout />
          <a href="./home" className="m-2">
            <button className="btn btn-primary btn-lg">Home</button>
          </a>
        </div>
        <h1>Post Content</h1>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <textarea
              className="form-control m-1"
              type="text"
              name="blogPostContent"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="3"
            ></textarea>
            <div>
              <button className="btn btn-success btn-lg" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
