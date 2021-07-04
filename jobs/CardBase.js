import React, { PropTypes } from "react";
import {  Card, Button, message } from 'antd';



export default class CardBase extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isButtonDisabled: false,
      data: props.cardInfo
    };
  }

  onSubmit = () => {
    let url="http://127.0.0.1:5000/applicationforjob";
    var data = this.state.data
    data["username"] = JSON.parse(localStorage.getItem("username"))
    console.log(data)
    var jobApplicationData = JSON.stringify(data)
    console.log("form Data")
    console.log(jobApplicationData)
    this.setState({
      isButtonDisabled: true
    });
    fetch(url,{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:jobApplicationData
    }).then((result)=>{
      result.json().then((resp)=>{
        console.warn("resp".resp)
      })
    })

    // if (typeof(Storage) !== "undefined") {
    //     localStorage.setItem('email', 'adeed7222@gmail.com');
    //     var email = localStorage.getItem("email");
    //     console.log(email)
    // }
 
    message.success('Job application submitted successfully.!!')
    console.log(this.state.data)   // you should be able to see your card data
  }

  render () {
       
    return (
        
      <div>
         <Card 
            hoverable
            style={{ width: "40" }} 
            key={this.state.data.index} 
            className="box"
            title={this.state.data.Company_Name}
          // cover={<img alt="example" src={this.state.data.image} />}
          >
            {this.state.data.Company_Name}<br/>
            {this.state.data.Eligibility}<br/>
            {this.state.data.Application_Open_Date}<br/>
            {this.state.data.Application_Close_Date}<br/>
            {this.state.data.Location}<br/>
            {this.state.data.Job_Description}<br/>
            <br/><br/>
          <Button 
              type="primary" 
              htmlType="submit" 
              onClick={this.onSubmit}
              disabled={this.state.isButtonDisabled}
          >
              Apply
            </Button>
    </Card>
        
      </div>
    );
  }
}
