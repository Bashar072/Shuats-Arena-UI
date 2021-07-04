import React from 'react';
import {
  Drawer, List, Avatar, Divider, Col, Row, Button,
} from 'antd';

const pStyle = {
  fontSize: 16,
  color: 'rgba(0,0,0,0.85)',
  lineHeight: '24px',
  display: 'block',
  marginBottom: 16,
};

const DescriptionItem = ({ title, content }) => (
  <div
    style={{
      fontSize: 14,
      lineHeight: '22px',
      marginBottom: 7,
      color: 'rgba(0,0,0,0.65)',
    }}
  >
    <p
      style={{
        marginRight: 8,
        display: 'inline-block',
        color: 'rgba(0,0,0,0.85)',
      }}
    >
      {title}:
    </p>
    {content}
  </div>
);


export default class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = { visible: false,
      user: []
    }
  };
  componentDidMount(){
    var username = JSON.parse(localStorage.getItem("username"));
    fetch('http://127.0.0.1:5000/student/'+username).then(res=>res.json()).then(
            result=>{
                this.setState({user:result});
            }
        )
    // this.showDrawer();
    }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <List
          dataSource={[
            {
              name: this.state.user.First_Name+ " "+ this.state.user.Last_Name,
            },
            {
              name: JSON.parse(localStorage.getItem("username"))
            },
          ]}
          bordered
          renderItem={item => (
            <List.Item key={item.id} actions={[<a onClick={this.showDrawer}>View Profile</a>]}>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                }
                title={<a href="https://ant.design/index-cn">{item.name}</a>}
                description="Progresser"
              />
            </List.Item>
          )}
        />
        <Drawer
          width={640}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p style={{ ...pStyle, marginBottom: 24 }}>User Profile</p>
          <p style={pStyle}>Personal</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="PID" content={this.state.user.Pid} />{' '}
            </Col>
            </Row>
            <Row>
            <Col span={12}>
              <DescriptionItem title="First Name" content={this.state.user.First_Name} />{' '}
            </Col>
            <Col span={12}>
              <DescriptionItem title="Last Name" content={this.state.user.Last_Name} />{' '}
            </Col>
            <Col span={12}>
              <DescriptionItem title="Birthday" content={this.state.user.DOB} />
            </Col>
            </Row>
            <Divider />
            <p style={pStyle}>Academics Details</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Email" content={this.state.user.Email} />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Department" content={this.state.user.Dept_Code} />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Course Name" content={this.state.user.Couser_Name} />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Semester" content={this.state.user.Semester} />
            </Col>
            <Col span={12}>
              <DescriptionItem title="CGPA" content={this.state.user.CGPA} />
            </Col>
          </Row>
          <Divider />
          <p style={pStyle}>Skills</p>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Description"
                content={this.state.user.Description}
              />
            </Col>
          </Row>
        </Drawer>
      </div>
    );
  }
}
