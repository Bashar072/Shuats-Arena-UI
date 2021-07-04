import React from 'react';
import 'antd/dist/antd.css';
import { Table, Input, Button, Icon } from 'antd/';

// const columns = [
//   {
//     title: 'Pipeline',
//     dataIndex: 'pipeline',
//   },
//   {
//     title: 'Table',
//     dataIndex: 'table',
//   },
//   {
//     title: 'Job Type',
//     dataIndex: 'jobType',
//   },
//   {
//     title: 'Priority',
//     dataIndex: 'priority',
//   },
//   {
//     title: 'Owner',
//     dataIndex: 'owner',
//   },
//   {
//     title: 'System Name',
//     dataIndex: 'systemName',
//   },
//   {
//     title: 'Dependencies',
//     dataIndex: 'dependencies',
//   },
//   {
//     title: 'Wiki',
//     dataIndex: 'wiki',
//   },
//   {
//     title: 'Start Date',
//     dataIndex: 'startDate',
//   },
//   {
//     title: 'Run Frequency',
//     dataIndex: 'runFrequency',
//   },
//   {
//     title: 'SLA Mins',
//     dataIndex: 'slaMins',
//   },
// ];
// const data = [
//   {
//     key: '1',
//     pipeline: 'F5-H5 Aggregagtion',
//     table: 'ods.f5_h5launch_agg',
//     jobType: 'Transformation',
//     priority: 1,
//     owner: 'Andalib',
//     systemName: 'airflow',
//     dependencies: 'f5-ingestion,f5-ldingestion',
//     wiki: 'abc/efg',
//     startDate: '2020-03-10',
//     runFrequency: '15 mins',
//     slaMins: '30 mins'
//   },
//   {
//     key: '2',
//     pipeline: 'F5-H5 Aggregagtion',
//     table: 'ods.f5_h5launch_agg',
//     jobType: 'Transformation',
//     priority: 1,
//     owner: 'Andalib',
//     systemName: 'airflow',
//     dependencies: 'f5-ingestion,f5-ldingestion',
//     wiki: 'abc/efg',
//     startDate: '2020-03-10',
//     runFrequency: '15 mins',
//     slaMins: '30 mins'
//   },{
//     key: '3',
//     pipeline: 'F5-H5 Aggregagtion',
//     table: 'ods.f5_h5launch_agg',
//     jobType: 'Transformation',
//     priority: 1,
//     owner: 'Andalib',
//     systemName: 'airflow',
//     dependencies: 'f5-ingestion,f5-ldingestion',
//     wiki: 'abc/efg',
//     startDate: '2020-03-11',
//     runFrequency: '15 mins',
//     slaMins: '30 mins'
//   },{
//     key: '4',
//     pipeline: 'F5-H5 Aggregagtion',
//     table: 'ods.f5_h5launch_agg',
//     jobType: 'Transformation',
//     priority: 1,
//     owner: 'Andalib',
//     systemName: 'airflow',
//     dependencies: 'f5-ingestion,f5-ldingestion',
//     wiki: 'abc/efg',
//     startDate: '2020-03-10',
//     runFrequency: '15 mins',
//     slaMins: '30 mins'
//   },{
//     key: '5',
//     pipeline: 'F5-H5 Aggregagtion',
//     table: 'ods.f5_h5launch_agg',
//     jobType: 'Transformation',
//     priority: 1,
//     owner: 'Andalib',
//     systemName: 'airflow',
//     dependencies: 'f5-ingestion,f5-ldingestion',
//     wiki: 'abc/efg',
//     startDate: '2020-03-10',
//     runFrequency: '15 mins',
//     slaMins: '30 mins'
//   },{
//     key: '6',
//     pipeline: 'F5-H5 Aggregagtion',
//     table: 'ods.f5_h5launch_agg',
//     jobType: 'Transformation',
//     priority: 1,
//     owner: 'Andalib',
//     systemName: 'airflow',
//     dependencies: 'f5-ingestion,f5-ldingestion',
//     wiki: 'abc/efg',
//     startDate: '2020-03-10',
//     runFrequency: '15 mins',
//     slaMins: '30 mins'
//   },{
//     key: '7',
//     pipeline: 'F5-H5 Aggregagtion',
//     table: 'ods.f5_h5launch_agg',
//     jobType: 'Transformation',
//     priority: 1,
//     owner: 'Andalib',
//     systemName: 'airflow',
//     dependencies: 'f5-ingestion,f5-ldingestion',
//     wiki: 'abc/efg',
//     startDate: '2020-03-10',
//     runFrequency: '15 mins',
//     slaMins: '30 mins'
//   },{
//     key: '8',
//     pipeline: 'F5-H5 Aggregagtion',
//     table: 'ods.f5_h5launch_agg',
//     jobType: 'Transformation',
//     priority: 1,
//     owner: 'Andalib',
//     systemName: 'airflow',
//     dependencies: 'f5-ingestion,f5-ldingestion',
//     wiki: 'abc/efg',
//     startDate: '2020-03-10',
//     runFrequency: '15 mins',
//     slaMins: '30 mins'
//   },
// ];
const columns = [{
            title: 'Student_id',
            dataIndex: 'Student_id',
            key: 'Student_id'
          }, {
            title: 'Company_Name',
            dataIndex: 'Company_Name',
            key: 'Company_Name'
          }, {
            title: 'Location',
            dataIndex: 'Location',
            key: 'Location'
          }, {
            title: 'Application_Date',
            dataIndex: 'Application_Date',
            key: 'Application_Date'
          }];

class MySubmissions extends React.Component {
  constructor(props){
        super(props);
        
        this.state={
            jobs:[]
        };
    }
    componentDidMount(){
        fetch("http://127.0.0.1:5000/jobapplications").then(res=>res.json()).then(
            result=>{
                this.setState({jobs:result});
            }
        )
    }

    render(){
      const { jobs } = this.state;
      const data = jobs.map(row => ({
        Student_id:row.Student_id,
        Company_Name:row.Company_Name,
        Location:row.Location,
        Course_Name:row.Course_Name,
        Application_Date:row.Application_Date
      }))
      return (
        <div>
          <div>
            <header>
            <p style={{fontSize: '18px', textAlign:'center', color:'#2C3E50'}}>My Job Applications</p>
            </header>

          </div>
          <div>
          <Table columns={columns} dataSource={data} size="small" style={{color:'#2C3E50'}} />
          </div>
              

        </div>
      )
    }
}

export default MySubmissions