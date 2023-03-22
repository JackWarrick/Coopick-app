import React from 'react';
//import profilepic from '../../assets/me.jpeg';
//import "../../styles/about.css"
// import Auth from '../utils/auth';
import { Form } from 'react-bootstrap'

export default function Login() {
      
        return (
            <>
          <div className="App">
            <div className="container">
              <div className="row d-flex justify-content-center">
              <div className="bg-secondary text-light">
                <h1 className="display-1">LOG IN</h1>
                </div>
                <div className="col-md-4 m-2">
                  <Form>
                    <Form.Group>
                      <Form.Label>Username:</Form.Label>
                      <Form.Control
                        type="text"
                        name="username"
                        placeholder="Enter Username"
                      />

                    </Form.Group>
                    <div className="form-group">
                      <label>Password:</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                      />
                    </div>

                    <button type="submit" className="btn btn-primary m-2" >
                      Login
                    </button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
          </>
        );
      }
    