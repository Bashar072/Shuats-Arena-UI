// import { Header } from 'antd/lib/layout/layout';
import React, { Component } from 'react';
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Layout, Menu, Icon, Tabs, Dropdown } from "antd";
import { UserOutlined,DashboardOutlined, LoginOutlined, LogoutOutlined, UnorderedListOutlined, MonitorOutlined,
 BankOutlined, AuditOutlined,CheckCircleOutlined,NotificationOutlined, FormOutlined } from '@ant-design/icons';



const { Header, Content, Footer } = Layout;

class TitleHeader extends React.Component {

    render() {
        return (
            <div>
                <Header>
                    <div className="logo" />
                    <Menu

                    theme="dark"
                    mode="horizontal"
                    // defaultSelectedKeys={["1"]}
                    >
                        <Menu.Item key="1" style={{}}>
                            <DashboardOutlined />
                            Dashboard <Link to="/dashboard" />
                        </Menu.Item>
                        <Menu.Item key="2">
                            <AuditOutlined />
                            Placement
                            <Link to="/placement" />
                        </Menu.Item>
                        <Menu.Item key="3">
                            <NotificationOutlined />
                            Announcements <Link to="/announcements" />
                        </Menu.Item>
                        <Menu.Item key="4">
                            <BankOutlined />
                            Companies <Link to="/companies" />
                        </Menu.Item>
                        <Menu.Item key="5">
                            <UnorderedListOutlined />
                            Job Openings <Link to="/openings" />
                        </Menu.Item>
                        <Menu.Item key="6">
                            <CheckCircleOutlined />
                            My Submissions <Link to="/submissions" />
                        </Menu.Item>
                        <Menu.Item key="7" style={{ color: "###d3f261" }}>
                            <UserOutlined />
                            { JSON.parse(localStorage.getItem("username"))} <Link to="/profile" />
                        </Menu.Item>
                        {/* <Menu.Item key="8" style={{ float: "right", color: "#F9E79F" }}>
                                <LogoutOutlined />
                                logout <Link to="/logout" />
                            </Menu.Item> */}
                        {
                            localStorage.getItem("username") ?
                            <Menu.Item key="8" style={{ float: "right", color: "#F9E79F" }}>
                                <LogoutOutlined />
                                logout <Link to="/logout" />
                            </Menu.Item>
                            :
                            <Menu.Item key="8" style={{ float: "right", color: "#F9E79F" }}>
                                <LoginOutlined />
                                Login <Link to="/" />
                            </Menu.Item>
                        }
                        {/* <Menu.Item key="9" style={{ float: "right", color: "#F9E79F" }}>
                            <UserOutlined />
                            Adeed <Link to="/profile" />
                        </Menu.Item> */}
                    </Menu>
                </Header>

            </div>
        );
    }
}

export default TitleHeader;