import React from 'react';
import Logout from '../components/logout';
//import profilepic from '../../assets/me.jpeg';
//import "../../styles/about.css"
import { Button } from 'react-bootstrap'
import Auth from '../utils/auth';

export default function Post() {

  if (!Auth.loggedIn()) {
    console.log(Auth.loggedIn);
    return window.location.assign("/");
  } else {   
      
        return (
            
        <div className="App">
        <Logout/>
        <h1>Blog Posts</h1>
        <Button>Test Button</Button>
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
    