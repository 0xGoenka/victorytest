import React from "react";
import ReactDOM from "react-dom";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
  VictoryZoomContainer,
} from "victory";

const data2012 = [{ quarter: 1, earnings: 13000 }];

let i = 0;

while (i < 600) {
  data2012.push({ quarter: i, earnings: i });
  i++;
}

// const data2013 = [
//   {quarter: 1, earnings: 15000},
//   {quarter: 2, earnings: 12500},
//   {quarter: 3, earnings: 19500},
//   {quarter: 4, earnings: 13000}
// ];

// const data2014 = [
//   {quarter: 1, earnings: 11500},
//   {quarter: 2, earnings: 13250},
//   {quarter: 3, earnings: 20000},
//   {quarter: 4, earnings: 15500}
// ];

// const data2015 = [
//   {quarter: 1, earnings: 18000},
//   {quarter: 2, earnings: 13250},
//   {quarter: 3, earnings: 15000},
//   {quarter: 4, earnings: 12000}
// ];

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Victory Tutorial</h1>
        <VictoryChart
          theme={VictoryTheme.material}
          domain={{ x: [0, 800] }}
          containerComponent={<VictoryZoomContainer />}
        >
          <VictoryAxis tickFormat={(x) => `${x}`} />
          <VictoryAxis dependentAxis tickFormat={(x) => `$${x / 1000}k`} />

          <VictoryBar
            barRatio={0.8}
            data={data2012}
            x={"quarter"}
            y={"earnings"}
          />
        </VictoryChart>
      </div>
    );
  }
}

const app = document.getElementById("app");
ReactDOM.render(<Main />, app);
