import React from "react";

//Need to somehow only have this button show up if the user is logged in

import { Button } from "react-bootstrap";

export default function Logout() {
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      console.log("Logout successful.");
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <a href="/" className="m-2">
        <Button variant="danger" className="btn-lg" onClick={handleLogout}>
          Logout
        </Button>
      </a>
    </>
  );
}
