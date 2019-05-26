import React from "react";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
class TodayGraph extends React.Component {
  /**
   * [
   *  {
   *    starttime: 2019-05-05,03:00:00,
   *    endtime: 2019-05-05,03:05:00,
   *    concetration: high, // high, middle, low
   *    categories: ['study', 'study', 'work', 'work']
   *  },
   *  {
   *    starttime: 2019-05-05,03:05:00,
   *    endtime: 2019-05-05,03:10:00,
   *    concetration: high, // high, middle, low
   *    categories: ['study', 'study', 'work',]
   *  },
   * ]
   */
  render() {
    return (
      <LineChart
        data={{
          labels: ["15:00", "15:30", "16:00", "16:30", "17:00", "17:30"],
          datasets: [
            {
              data: [
                parseInt(Math.random() * 100, 10),
                parseInt(Math.random() * 100, 10),
                parseInt(Math.random() * 100, 10),
                parseInt(Math.random() * 100, 10),
                parseInt(Math.random() * 100, 10),
                parseInt(Math.random() * 100, 10)
              ]
            }
          ]
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        // yAxisLabel={"%"}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    );
  }
}

export default TodayGraph;
