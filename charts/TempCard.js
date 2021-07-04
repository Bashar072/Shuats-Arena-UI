import React, { PropTypes } from "react";
import {  Card, Button, message } from 'antd';





export default class TempCard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isButtonDisabled: false,
      data: props.description
    };
  }

  onSubmit = () => {
    this.setState({
      isButtonDisabled: true
    });
 
    message.success('Job application submitted successfully!')
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
    title={this.state.data.title}
    // cover={<img alt="example" src={this.state.data.image} />}
    >
      {this.state.data.title}<br/>
      {this.state.data.text}
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
