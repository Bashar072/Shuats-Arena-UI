import React from "react";
import "./Box.css";
import {  Card, Button } from 'antd';
import axios from 'axios'

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
      {card.locations}<br/>
      {card.website}<br/>
      {card.Email}<br/>
    </Card>
    )
  };

export default class Companies extends React.Component {
    constructor(props){
        super(props);
        
        this.state={
            companies:[]
        };
    }
    componentDidMount(){
        fetch("http://127.0.0.1:5000/companies").then(res=>res.json()).then(
            result=>{
                this.setState({companies:result});
            }
        )
    }

    render(){
      const { companies } = this.state;
      const cardInfo = companies.map(row => ({
        Company_Name:row.Company_Name,
        locations:row.locations,
        website:row.website,
        Email:row.Email
      }))
      return (
        <div className="grid">
          {cardInfo.map(renderCard)}
        </div>
      )
    }
}
