import React, { useEffect, useState } from "react";
import Auth from "../utils/auth";
import Logout from "../components/logout";
import axios from "axios";
import { Card } from "react-bootstrap";
import moment from "moment";

export default function Homepage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/api/posts");
        setPosts(response.data);
      } catch (error) {
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

        <h3>Posts</h3>

        <div>
          {posts.map((post) => (
            <Card
              key={post.id}
              className="my-3 mx-auto"
              style={{ width: "18rem" }}
            >
              <Card.Body>
                <Card.Title>{post.message}</Card.Title>
                <Card.Text>
                  Date: {moment(post.date_created).format("MM-DD-YYYY")}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}
