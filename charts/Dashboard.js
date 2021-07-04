import React from "react";
import PlacementBarChart from "./PlacementBarChart"
import LineChart from "./LineChart"
import PieChart from "./PieChart"
import TempCard from "./TempCard"

const cardInfo = [
    {
      image: "https://i.insider.com/50f967f56bb3f7830a000019",
      title: "Lebron James",
      text: "THE GOAT",
    },
    {
      image:
        "https://cdn.vox-cdn.com/thumbor/M1qLla2h-V_2yV_Z4nF_NHH_tjA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18286450/usa_today_12495932.jpg",
      title: "Alex Caruso",
      text: "THE TRUE GOAT",
    }]
var arrayLength = cardInfo.length;
export default class Dashboard extends React.Component  {
  render() {
    const carinfo = {name: "Ford", model: "Mustang"};
    return (
      <div>
        <div>
          <PieChart/>
        </div>
        <div>
          <PlacementBarChart/>
        </div>
        <div>
          <LineChart/>
        </div>

      </div>
    );
  }
}