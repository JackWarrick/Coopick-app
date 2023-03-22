import React from "react";

export default function Init() {

    return (
        <div className="m-2">
            <h1 className="display-1 d-flex justify-content-center">Coopick social media app</h1>
            <div className="d-flex justify-content-center">
            <a href='./login'className="m-2" ><button className="btn btn-primary">Login</button></a>
            <a href='./signup'className="m-2"><button className="btn btn-primary">Sign Up</button></a>
            </div>
        </div>
    );

}
