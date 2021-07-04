import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import React from "react";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Highest Salary by Companies",
    subcaption: "2016-2020",
    xaxisname: "Years",
    yaxisname: "Salaries in INR",
    formatnumberscale: "1",
    plottooltext:
      "<b>$dataValue</b> offered by <b>$seriesName</b> in $label",
    theme: "umber",
    drawcrossline: "1"
  },
  categories: [
    {
      category: [
        {
          label: "2016"
        },
        {
          label: "2017"
        },
        {
          label: "2018"
        },
        {
          label: "2019"
        },
        {
          label: "2020"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "TCS",
      data: [
        {
          value: "125000"
        },
        {
          value: "300000"
        },
        {
          value: "480000"
        },
        {
          value: "800000"
        },
        {
          value: "1100000"
        }
      ]
    },
    {
      seriesname: "Infosys",
      data: [
        {
          value: "70000"
        },
        {
          value: "150000"
        },
        {
          value: "350000"
        },
        {
          value: "600000"
        },
        {
          value: "1400000"
        }
      ]
    },
    {
      seriesname: "Wipro",
      data: [
        {
          value: "10000"
        },
        {
          value: "100000"
        },
        {
          value: "300000"
        },
        {
          value: "600000"
        },
        {
          value: "900000"
        }
      ]
    }
  ]
};


export default class PlacementBarChart extends React.Component  {
  render(){
      return (
        
        <ReactFusioncharts
        type="mscolumn2d"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
        
      )
    }
}