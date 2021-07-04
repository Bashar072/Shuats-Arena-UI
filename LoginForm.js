import React from 'react';
import 'antd/dist/antd.css';
import {useHistory} from 'react-router-dom'
import { withRouter } from 'react-router';
import { Redirect } from "react-router-dom";
import { Icon, Input, Button, Row, Col, Card, Form } from 'antd';

import { UserOutlined, LockOutlined } from '@ant-design/icons';


const colStyle = { height: '60px' }

class LoginForm extends React.Component {

  constructor() {
    super();
    this.state={ isLoggedIn: false,
      username:"",
      Password:""
    }
  }

  handleSubmit = () => {
    let url="http://127.0.0.1:5000/login";
    let data=this.state;
    fetch(url,{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(data)
    }).then((result)=>{
      result.json().then((resp)=>{
        console.warn("resp".resp);
        console.log("response data")
        console.log(resp)
        if(resp.status == 200)
        {
          console.log("Login successful!")
          this.setState({
            isLoggedIn: true
          })
        }
        else{
          console.error("Problem: " + resp);
        }
      })
    })
    console.log(data)
    localStorage.setItem('username',JSON.stringify(this.state.username))
    // this.props.history.push('/profile')
  }

    render(){
      if(this.state.isLoggedIn == true){
      return <Redirect to="/openings" />
    }
      return (
        <Row type="flex" justify="center" align="middle" style={{minHeight: '50vh', color: '#2C3E50'}}>
          <Col>
          <Card >
            <Form
        layout="horizontal"
         className="login-form"
        name="basic">
          <Col span={25} style={colStyle}>
          <Form.Item >
            <Input prefix={<UserOutlined/>} type="text" placeholder="Username" value={this.state.username} name="username" onChange={(data )=>{this.setState({username:data.target.value}) }} />
          </Form.Item>
            </Col>
          <Col span={25} style={colStyle}>
          <Form.Item>
            <Input prefix={<LockOutlined/>} type="password" placeholder="Password" value={this.state.Password} name="Password" onChange={(data )=>{this.setState({Password:data.target.value}) }} />
          </Form.Item>
            </Col>

        </Form>
        <Form.Item style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>
              Log in
            </Button>
        </Form.Item>
        
        </Card>
        </Col>
        </Row>
      )
    }
}

export default LoginForm