import React from 'react';
import { Form, Input, InputNumber, Button, DatePicker, message, Card, Row, Col } from 'antd';
import { withRouter } from 'react-router-dom';
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import { useHistory } from "react-router-dom";

const labelStyle = { display: 'inline-block', width: 'calc(30% - 8px)', span: 2, fontSize: 12 }
const colStyle = { height: '90px' }


export default class CompanySignUp extends React.Component {
  constructor() {
    super();
    this.state={
      Company_Name: "",
      Email: "",
      locations: "",
      website: "",  
      password: ""
    }
  }

  onSubmit = () => {
    let url="http://127.0.0.1:5000/addcompany";
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
        console.warn("resp".resp)
      })
    })
    message.success('ThankYou for Registration. Now you Can Login!!!')
    this.props.history.push('/')
  }

  render() {

    return (
      
      <div>
        <Card title="Company Registration Form" 
              bordered={false} 
              style={{ width: 600, position: "center" }}
        >
          
        <Form
        layout="horizontal"
        name="basic"
        // onClick={()=>{this.submit();this.props.history.push('/submissions');}}>
        >
          <Row gutter={16}>
            <Col span={12} style={colStyle}>
          <Form.Item label="Company Name">
            <Input type="text" value={this.state.Company_Name} name="Company_Name" onChange={(data )=>{this.setState({Company_Name:data.target.value}) }} />
          </Form.Item>
          
            </Col>
            <Col span={12} style={colStyle}>
          <Form.Item label="Email">
            <Input type="email" value={this.state.Email} name="Email" onChange={(data )=>{this.setState({Email:data.target.value}) }} />
          </Form.Item>
          
            </Col>
            <Col span={12} style={colStyle}>
          <Form.Item label="Location">
            <Input type="text" value={this.state.locations} name="locations" onChange={(data )=>{this.setState({locations:data.target.value}) }} />
          </Form.Item>
          
            </Col>
            <Col span={12} style={colStyle}>
          <Form.Item label="Website">
            <Input type="text" value={this.state.website} name="website" onChange={(data )=>{ this.setState({website:data.target.value}) }} /> 
          </Form.Item>
          
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12} style={colStyle}>
              <Form.Item label="Password">
                <Input type="password" value={this.state.password} name="password" onChange={(data )=>{this.setState({password:data.target.value}) }} />
              </Form.Item>
            </Col>
            
          </Row>
          <Row gutter={8}>
            
              <Button 
              type="primary" 
              htmlType="submit"
              onClick={this.onSubmit} 
              style={{ background: " #27ae60 ", borderColor: "white" , color: "white", position: "center"}}>
                Submit
            </Button>

           
          </Row>
          

          
        </Form>

        </Card>
      </div>
    )
  }
}