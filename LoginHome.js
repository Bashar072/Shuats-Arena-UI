import React from 'react';
import 'antd/dist/antd.css';
import LoginForm from "./LoginForm"
import logo from "../SHIATS_LOGO.png"


class LoginHome extends React.Component {

    render(){
      return (
        <div style={{ backgroundColor: "#ECF4FC", height: "100vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <img src={logo} />
      </div>
      <div>
        <header>
          <p
            style={{ fontSize: "13px", textAlign: "center", color: "#808B96" }}
          >
            Formerly Allahabad Agricultural Institute
          </p>
          <p
            style={{ fontSize: "25px", textAlign: "center", color: "#27537E" }}
          >
            
            SHUATS Arena
          </p>
        </header>
      </div>
      <div>
        <LoginForm />
      </div>
    </div>
      )
    }
}

export default LoginHome