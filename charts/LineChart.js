import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import React from "react";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Placement Offer Stats by Year",
    yaxisname: "% Permanent Placement Offer",
    subcaption: "[2009-2020]",
    numbersuffix: "%",
    rotatelabels: "1",
    setadaptiveymin: "1",
    theme: "umber"
  },
  data: [
    {
      label: "2009",
      value: "89.45"
    },
    {
      label: "2010",
      value: "89.87"
    },
    {
      label: "2011",
      value: "89.64"
    },
    {
      label: "2012",
      value: "90.13"
    },
    {
      label: "2013",
      value: "90.67"
    },
    {
      label: "2014",
      value: "90.54"
    },
    {
      label: "2015",
      value: "90.75"
    },
    {
      label: "2016",
      value: "90.8"
    },
    {
      label: "2017",
      value: "91.16"
    },
    {
      label: "2018",
      value: "91.37"
    },
    {
      label: "2019",
      value: "91.66"
    },
    {
      label: "2020",
      value: "91.8"
    }
  ]
};


export default class LineChart extends React.Component  {
  render() {
    return (
      <ReactFusioncharts
        type="line"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}