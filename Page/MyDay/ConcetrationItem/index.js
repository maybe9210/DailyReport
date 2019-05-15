import React from "react";
import { Text, View, TextInput } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import moment from "moment";

class ConcentrationItem extends React.Component {
  state = {
    text: "",
    date: new Date(),
    remainTime: "00:04:59"
  };

  componentWillMount() {
    const today = new moment();
    this.setState({
      date: today
    });
    console.log(today.format("YYYY.MM.DD"));
  }
  render() {
    // const item = this.props.data;
    const itemOrigin = {
      tarttime: "2019-05-05,03:05:00",
      endtime: "2019-05-05,03:10:00",
      concetration: "high", // high, middle, low
      categories: ["study", "study", "work"]
    };
    const categoryView = itemOrigin.categories.map((item, idx) => {
      console.log(`[TEST] item = ${item}`);
      return (
        <View key={idx}>
          <Text> {item} </Text>
        </View>
      );
    });
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor: "blue",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center"
          }}
        >
          <Text>{itemOrigin.concetration}</Text>
        </View>
        <View
          style={{
            flex: 4,
            flexDirection: "row"
          }}
        >
          {categoryView}
        </View>
      </View>
    );
  }
}
export default ConcentrationItem;
