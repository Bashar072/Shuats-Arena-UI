import React from 'react';
import { Form, Input, InputNumber, Button, DatePicker, message, Card, Row, Col } from 'antd';
import axios from 'axios'

const labelStyle = { display: 'inline-block', width: 'calc(30% - 8px)', span: 2, fontSize: 12 }
const colStyle = { height: '90px' }


export default class StudentSignUp extends React.Component {
  constructor() {
    super();
    this.state={
      Pid: "",
      Email: "",
      Dept_Code: "",  
      Course_Name: "",
      CGPA: "",
      Semester: "",
      Description: "",
      DOB: "",
      password: ""
    }
  }

  onSubmit = () => {
    let url="http://127.0.0.1:5000/addstudent";
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
    message.success('Registration successfull. Now You can Login!!')
    console.log(this.state.data)
    this.props.history.push('/')
  }

  render() {

    return (
      
      <div>
        <Card title="Student Registration Form" 
              bordered={false} 
              style={{ width: 600, position: "center" }}
        >
          
        <Form
        layout="horizontal"
        name="basic"
        // onClick={()=>{this.submit()}}>
        >
          <Row gutter={16}>
            <Col span={12} style={colStyle}>
          <Form.Item label="PID">
            <Input type="text" value={this.state.Pid} name="Pid" onChange={(data )=>{this.setState({Pid:data.target.value}) }} />
          </Form.Item>
          
            </Col>
            <Col span={12} style={colStyle}>
          <Form.Item label="First Name">
            <Input type="text" value={this.state.First_Name} name="First_Name" onChange={(data )=>{this.setState({First_Name:data.target.value}) }} />
          </Form.Item>
          
            </Col>
            <Col span={12} style={colStyle}>
          <Form.Item label="Last_Name">
            <Input type="text" value={this.state.Last_Name} name="Last_Name" onChange={(data )=>{this.setState({Last_Name:data.target.value}) }} />
          </Form.Item>
          
            </Col>
            <Col span={12} style={colStyle}>
          <Form.Item label="Email">
            <Input type="email" value={this.state.Email} name="Email" onChange={(data )=>{ this.setState({Email:data.target.value}) }} /> 
          </Form.Item>
          
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12} style={colStyle}>
              <Form.Item label="Dept. Code">
                <Input type="text" value={this.state.Dept_Code} name="Dept_code" onChange={(data )=>{this.setState({Dept_Code:data.target.value}) }} /> 
              </Form.Item>
          
            </Col>
            <Col span={12} style={colStyle}>
              <Form.Item label="Course Name">
                <Input type="text" value={this.state.Course_Name} name="Course_Name" onChange={(data )=>{this.setState({Course_Name:data.target.value}) }} />
              </Form.Item>
          
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12} style={colStyle}>
              <Form.Item label="CGPA">
                <Input type="number" step="0.01" value={this.state.CGPA} name="CGPA" onChange={(data )=>{this.setState({CGPA:data.target.value}) }} />
              </Form.Item>
            </Col>
            <Col span={12} style={colStyle}>
              <Form.Item label="Semester">
                  <Input type="number" value={this.state.Semester} name="Semester" onChange={(data )=>{this.setState({Semester:data.target.value}) }} />

              </Form.Item>

            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={16} style={colStyle}>
              <Form.Item label="Description">
                <Input type="text" value={this.state.Description} name="Description" onChange={(data )=>{this.setState({Description:data.target.value}) }} />
              </Form.Item>
            </Col>
            <Col span={12} style={colStyle}>
              <Form.Item label="DOB">
                <Input type="text" value={this.state.DOB} name="DOB" onChange={(data )=>{this.setState({DOB:data.target.value}) }} />
              </Form.Item>
              

            </Col>
          </Row>

          <Row gutter={8}>
            <Col span={10} style={colStyle}>
              <Form.Item label="Password">
                <Input type="password" value={this.state.password} name="Password" onChange={(data )=>{this.setState({password:data.target.value}) }} />
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