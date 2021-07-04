
import React from 'react';
import 'antd/dist/antd.css';
import { Collapse } from 'antd';
import notice from "../notice_sample.png"

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

class Annoucements extends React.Component {

    render(){
      return (
        <div>
          
              <Collapse defaultActiveKey={['1']} onChange={callback}>
                <Panel header="Notice: Offline Class Suspension March 2021" key="1">
                  <img alt="example" src={notice} />
                </Panel>
                <Panel header="Notice: Fee Submission Jan-June 2021" key="2">
                  <p>{text}</p>
                </Panel>
                <Panel header="Notice: Backlog Paper B.Tech CSE" key="3">
                  <p>{text}</p>
                </Panel>
              </Collapse>

        </div>
      )
    }
}

export default Annoucements