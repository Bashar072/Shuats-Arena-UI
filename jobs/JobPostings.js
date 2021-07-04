import React from "react";
import "./Box.css";
import {  Card, Button } from 'antd';
import axios from 'axios'
import CardBase from "./CardBase"

// const cardInfo = [
//     {
//       image: "https://i.insider.com/50f967f56bb3f7830a000019",
//       title: "Lebron James",
//       text: "THE GOAT",
//     },
//     {
//       image:
//         "https://cdn.vox-cdn.com/thumbor/M1qLla2h-V_2yV_Z4nF_NHH_tjA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18286450/usa_today_12495932.jpg",
//       title: "Alex Caruso",
//       text: "THE TRUE GOAT",
//     },
//     {
//       image:
//         "https://www.insidehook.com/wp-content/uploads/2020/03/steph-curry-nba-jam-e1583192954848.jpg?fit=734%2C488",
//       title: "Steph Curry",
//       text: "he good",
//     },
//     {
//       image:
//         "https://i.pinimg.com/originals/03/ce/01/03ce015ea85dc84a17fb4c24a96cd87e.jpg",
//       title: "Michael Jordan",
//       text: "he is very close to goat",
//     },
//     {
//       image: "https://i.insider.com/50f967f56bb3f7830a000019",
//       title: "Lebron James",
//       text: "THE GOAT",
//     },
//     {
//       image:
//         "https://cdn.vox-cdn.com/thumbor/M1qLla2h-V_2yV_Z4nF_NHH_tjA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18286450/usa_today_12495932.jpg",
//       title: "Alex Caruso",
//       text: "THE TRUE GOAT",
//     },
//     {
//       image:
//         "https://www.insidehook.com/wp-content/uploads/2020/03/steph-curry-nba-jam-e1583192954848.jpg?fit=734%2C488",
//       title: "Steph Curry",
//       text: "he good",
//     },
//     {
//       image:
//         "https://i.pinimg.com/originals/03/ce/01/03ce015ea85dc84a17fb4c24a96cd87e.jpg",
//       title: "Michael Jordan",
//       text: "he is very close to goat",
//     },
//     {
//       image: "https://i.insider.com/50f967f56bb3f7830a000019",
//       title: "Lebron James",
//       text: "THE GOAT",
//     },
//     {
//       image:
//         "https://cdn.vox-cdn.com/thumbor/M1qLla2h-V_2yV_Z4nF_NHH_tjA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18286450/usa_today_12495932.jpg",
//       title: "Alex Caruso",
//       text: "THE TRUE GOAT",
//     },
//     {
//       image:
//         "https://www.insidehook.com/wp-content/uploads/2020/03/steph-curry-nba-jam-e1583192954848.jpg?fit=734%2C488",
//       title: "Steph Curry",
//       text: "he good",
//     },
//     {
//       image:
//         "https://i.pinimg.com/originals/03/ce/01/03ce015ea85dc84a17fb4c24a96cd87e.jpg",
//       title: "Michael Jordan",
//       text: "he is very close to goat",
//     },
//     {
//       image: "https://i.insider.com/50f967f56bb3f7830a000019",
//       title: "Lebron James",
//       text: "THE GOAT",
//     },
//     {
//       image:
//         "https://cdn.vox-cdn.com/thumbor/M1qLla2h-V_2yV_Z4nF_NHH_tjA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18286450/usa_today_12495932.jpg",
//       title: "Alex Caruso",
//       text: "THE TRUE GOAT",
//     },
//     {
//       image:
//         "https://www.insidehook.com/wp-content/uploads/2020/03/steph-curry-nba-jam-e1583192954848.jpg?fit=734%2C488",
//       title: "Steph Curry",
//       text: "he good",
//     },
//     {
//       image:
//         "https://i.pinimg.com/originals/03/ce/01/03ce015ea85dc84a17fb4c24a96cd87e.jpg",
//       title: "Michael Jordan",
//       text: "he is very close to goat",
//     },
//     {
//       image: "https://i.insider.com/50f967f56bb3f7830a000019",
//       title: "Lebron James",
//       text: "THE GOAT",
//     },
//     {
//       image:
//         "https://cdn.vox-cdn.com/thumbor/M1qLla2h-V_2yV_Z4nF_NHH_tjA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18286450/usa_today_12495932.jpg",
//       title: "Alex Caruso",
//       text: "THE TRUE GOAT",
//     },
//     {
//       image:
//         "https://www.insidehook.com/wp-content/uploads/2020/03/steph-curry-nba-jam-e1583192954848.jpg?fit=734%2C488",
//       title: "Steph Curry",
//       text: "he good",
//     },
//     {
//       image:
//         "https://i.pinimg.com/originals/03/ce/01/03ce015ea85dc84a17fb4c24a96cd87e.jpg",
//       title: "Michael Jordan",
//       text: "he is very close to goat",
//     },
//     {
//       image: "https://i.insider.com/50f967f56bb3f7830a000019",
//       title: "Lebron James",
//       text: "THE GOAT",
//     },
//     {
//       image:
//         "https://cdn.vox-cdn.com/thumbor/M1qLla2h-V_2yV_Z4nF_NHH_tjA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18286450/usa_today_12495932.jpg",
//       title: "Alex Caruso",
//       text: "THE TRUE GOAT",
//     },
//     {
//       image:
//         "https://www.insidehook.com/wp-content/uploads/2020/03/steph-curry-nba-jam-e1583192954848.jpg?fit=734%2C488",
//       title: "Steph Curry",
//       text: "he good",
//     },
//     {
//       image:
//         "https://i.pinimg.com/originals/03/ce/01/03ce015ea85dc84a17fb4c24a96cd87e.jpg",
//       title: "Michael Jordan",
//       text: "he is very close to goat",
//     },
//     {
//       image: "https://i.insider.com/50f967f56bb3f7830a000019",
//       title: "Lebron James",
//       text: "THE GOAT",
//     },
//     {
//       image:
//         "https://cdn.vox-cdn.com/thumbor/M1qLla2h-V_2yV_Z4nF_NHH_tjA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18286450/usa_today_12495932.jpg",
//       title: "Alex Caruso",
//       text: "THE TRUE GOAT",
//     },
//     {
//       image:
//         "https://www.insidehook.com/wp-content/uploads/2020/03/steph-curry-nba-jam-e1583192954848.jpg?fit=734%2C488",
//       title: "Steph Curry",
//       text: "he good",
//     },
//     {
//       image:
//         "https://i.pinimg.com/originals/03/ce/01/03ce015ea85dc84a17fb4c24a96cd87e.jpg",
//       title: "Michael Jordan",
//       text: "he is very close to goat",
//     },
//     {
//       image: "https://i.insider.com/50f967f56bb3f7830a000019",
//       title: "Lebron James",
//       text: "THE GOAT",
//     },
//     {
//       image:
//         "https://cdn.vox-cdn.com/thumbor/M1qLla2h-V_2yV_Z4nF_NHH_tjA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18286450/usa_today_12495932.jpg",
//       title: "Alex Caruso",
//       text: "THE TRUE GOAT",
//     },
//     {
//       image:
//         "https://www.insidehook.com/wp-content/uploads/2020/03/steph-curry-nba-jam-e1583192954848.jpg?fit=734%2C488",
//       title: "Steph Curry",
//       text: "he good",
//     },
//     {
//       image:
//         "https://i.pinimg.com/originals/03/ce/01/03ce015ea85dc84a17fb4c24a96cd87e.jpg",
//       title: "Michael Jordan",
//       text: "he is very close to goat",
//     },
//   ];

// export default class JobPostings extends React.Component {



//     render(){
//       return (
//         <div className="grid">
//           {cardInfo.map((value, index) => {
//         return <CardBase cardInfo={index, value}/>
//       })}
//         </div>
//       )
//     }
// }

const renderCard = (card, index) => {
    return (
    <Card 
    hoverable
    style={{ width: "40" }} 
    key={index} 
    className="box"
    title={card.Company_Name}
    // cover={<img alt="example" src={card.image} />}
    >
      {card.Company_Name}<br/>
      {card.Eligibility}<br/>
      {card.Application_Open_Date}<br/>
      {card.Application_Close_Date}<br/>
      {card.Location}<br/>
      {card.Job_Description}<br/>
      <br/>
      <br/>
    </Card>
    )
  };

export default class JobPostings extends React.Component {
  constructor(props){
        super(props);
        this.state={
            jobs:[]
        };
    }
    componentDidMount(){
        fetch("http://127.0.0.1:5000/jobs").then(res=>res.json()).then(
            result=>{
                this.setState({jobs:result});
            }
        )
    }

    render(){
      const { jobs } = this.state;
      const cardInfo = jobs.map(row => ({
        Company_Name:row.Company_Name,
        Eligibility:row.Eligibility,
        Application_Open_Date:row.Application_Open_Date,
        Application_Close_Date:row.Application_Close_Date,
        Location:row.Location,
        Job_Description:row.Job_Description
        }))
        return (
          <div className="grid">
            {cardInfo.map((renderCard, index) => {
              return <CardBase cardInfo={index, renderCard}/>
              })}
            {/* <AppliedApplication AppliedJob = {jobs} /> */}
          </div>
        )
      }
    }