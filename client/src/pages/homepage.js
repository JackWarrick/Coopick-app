import React, { useEffect, useState } from "react";
import Auth from "../utils/auth";
import Logout from "../components/logout";
import axios from "axios";
import { Card } from "react-bootstrap"


export default function Homepage() {
const [posts, setPosts] = useState([]);

useEffect(() => {
  const fetchPosts = async () => {
    try {
      const response = await axios.get("/api/posts");
      setPosts(response.data);
    } catch (error){
      console.error(error);
    }
  };
  fetchPosts();
}, []);

  if (!Auth.loggedIn()) {
    console.log(Auth.loggedIn);
    return window.location.assign("/");
  } else {

    return (
      <div className="m-2">
         <Logout />
        <h1 className="display-1 d-flex justify-content-center">
          Coopick social media app
        </h1>

        <a href="./post" className="m-2">
          <button className="btn btn-primary">Make a Post!</button>
        </a>

        <div className="d-flex justify-content-center">
          <h3>Posts</h3>
          {posts.map((post) => (
            <Card key={post.id} className="m-3" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{post.message}</Card.Title>
                <Card.Text>Date: {post.date_created}</Card.Text>
              </Card.Body>
            </Card>
      ))}
        </div>
      </div>
    );
  }
}
