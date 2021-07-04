import React from 'react';
import 'antd/dist/antd.css';
import { Table, Input, Button, Icon } from 'antd/';

const columns = [
  {
    title: 'Pipeline',
    dataIndex: 'pipeline',
  },
  {
    title: 'Table',
    dataIndex: 'table',
  },
  {
    title: 'Job Type',
    dataIndex: 'jobType',
  },
  {
    title: 'Priority',
    dataIndex: 'priority',
  },
  {
    title: 'Owner',
    dataIndex: 'owner',
  },
  {
    title: 'System Name',
    dataIndex: 'systemName',
  },
  {
    title: 'Dependencies',
    dataIndex: 'dependencies',
  },
  {
    title: 'Wiki',
    dataIndex: 'wiki',
  },
  {
    title: 'Start Date',
    dataIndex: 'startDate',
  },
  {
    title: 'Run Frequency',
    dataIndex: 'runFrequency',
  },
  {
    title: 'SLA Mins',
    dataIndex: 'slaMins',
  },
];
const data = [
  {
    key: '1',
    pipeline: 'F5-H5 Aggregagtion',
    table: 'ods.f5_h5launch_agg',
    jobType: 'Transformation',
    priority: 1,
    owner: 'Andalib',
    systemName: 'airflow',
    dependencies: 'f5-ingestion,f5-ldingestion',
    wiki: 'abc/efg',
    startDate: '2020-03-10',
    runFrequency: '15 mins',
    slaMins: '30 mins'
  },
  {
    key: '2',
    pipeline: 'F5-H5 Aggregagtion',
    table: 'ods.f5_h5launch_agg',
    jobType: 'Transformation',
    priority: 1,
    owner: 'Andalib',
    systemName: 'airflow',
    dependencies: 'f5-ingestion,f5-ldingestion',
    wiki: 'abc/efg',
    startDate: '2020-03-10',
    runFrequency: '15 mins',
    slaMins: '30 mins'
  },{
    key: '3',
    pipeline: 'F5-H5 Aggregagtion',
    table: 'ods.f5_h5launch_agg',
    jobType: 'Transformation',
    priority: 1,
    owner: 'Andalib',
    systemName: 'airflow',
    dependencies: 'f5-ingestion,f5-ldingestion',
    wiki: 'abc/efg',
    startDate: '2020-03-11',
    runFrequency: '15 mins',
    slaMins: '30 mins'
  },{
    key: '4',
    pipeline: 'F5-H5 Aggregagtion',
    table: 'ods.f5_h5launch_agg',
    jobType: 'Transformation',
    priority: 1,
    owner: 'Andalib',
    systemName: 'airflow',
    dependencies: 'f5-ingestion,f5-ldingestion',
    wiki: 'abc/efg',
    startDate: '2020-03-10',
    runFrequency: '15 mins',
    slaMins: '30 mins'
  },{
    key: '5',
    pipeline: 'F5-H5 Aggregagtion',
    table: 'ods.f5_h5launch_agg',
    jobType: 'Transformation',
    priority: 1,
    owner: 'Andalib',
    systemName: 'airflow',
    dependencies: 'f5-ingestion,f5-ldingestion',
    wiki: 'abc/efg',
    startDate: '2020-03-10',
    runFrequency: '15 mins',
    slaMins: '30 mins'
  },{
    key: '6',
    pipeline: 'F5-H5 Aggregagtion',
    table: 'ods.f5_h5launch_agg',
    jobType: 'Transformation',
    priority: 1,
    owner: 'Andalib',
    systemName: 'airflow',
    dependencies: 'f5-ingestion,f5-ldingestion',
    wiki: 'abc/efg',
    startDate: '2020-03-10',
    runFrequency: '15 mins',
    slaMins: '30 mins'
  },{
    key: '7',
    pipeline: 'F5-H5 Aggregagtion',
    table: 'ods.f5_h5launch_agg',
    jobType: 'Transformation',
    priority: 1,
    owner: 'Andalib',
    systemName: 'airflow',
    dependencies: 'f5-ingestion,f5-ldingestion',
    wiki: 'abc/efg',
    startDate: '2020-03-10',
    runFrequency: '15 mins',
    slaMins: '30 mins'
  },{
    key: '8',
    pipeline: 'F5-H5 Aggregagtion',
    table: 'ods.f5_h5launch_agg',
    jobType: 'Transformation',
    priority: 1,
    owner: 'Andalib',
    systemName: 'airflow',
    dependencies: 'f5-ingestion,f5-ldingestion',
    wiki: 'abc/efg',
    startDate: '2020-03-10',
    runFrequency: '15 mins',
    slaMins: '30 mins'
  },
];

class Placement extends React.Component {

    render(){
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

export default Placement