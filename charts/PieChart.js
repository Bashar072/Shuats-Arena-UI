import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import React from "react";
// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Placement Offer by Companies",
    plottooltext: "<b>$percentValue</b> of placement offered by $label servers",
    showlegend: "1",
    showpercentvalues: "1",
    legendposition: "bottom",
    usedataplotcolorforlabels: "1",
    theme: "fusion"
  },
  data: [
    {
      label: "TCS",
      value: "32647479"
    },
    {
      label: "Infosys",
      value: "22100932"
    },
    {
      label: "Wipro",
      value: "14376000"
    },
    {
      label: "Other",
      value: "18674221"
    }
  ]
};


export default class PieChart extends React.Component  {
  render() {
    return (
      <ReactFusioncharts
        type="pie2d"
        width="50%"
        height="50%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}