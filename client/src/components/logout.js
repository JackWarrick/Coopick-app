import React from "react";
import axios from "axios";

//Need to somehow only have this button show up if the user is logged in

import { Button } from "react-bootstrap";


export default function Logout(){

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
          await axios.post('http://localhost:3001/api/users/logout');
          localStorage.removeItem('token');
          console.log('Logout successful.');
        } catch (error) {
          console.log(error);
        }
      };

    return(
        <>
        <Button variant= "danger" className = "d-inline-flex" onClick={handleLogout}>Logout</Button>
        </>
    )
}