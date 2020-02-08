import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
    render() {
      return (
        <div style={{ height: "75vh" }} className="container">
          <div className="row">
            <div className="col center-align">
              <h4>
                <b>Build</b> a login/auth app with the{" "}
                <span style={{ fontFamily: "monospace" }}>MERN</span> stack from
                scratch
              </h4>
              <p>
                Create a (minimal) full-stack app with user authentication via
                passport and JWTs
              </p>
              <br />
              <div className="col">
                <Link
                  to="/register"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-primary"
                >
                  Register
                </Link>
              </div>
              <div className="col">
                <Link
                  to="/login"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-secondary"
                >
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  export default Landing;