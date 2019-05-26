import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import moment from "moment";
class TodayDate extends React.Component {
  state = {
    text: "",
    date: new Date(),
    remainTime: "00:04:59",
    isCalendar: false
  };

  componentWillMount() {
    const today = new moment();
    this.setState({
      date: today
    });
  }
  render() {
    const showingDate = this.state.date.format("YYYY.MM.DD");
    const { onPress } = this.props;
    return (
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            flex: 1,
            alignItems: "flex-end"
          }}
        >
          <Text> ◁ </Text>
        </View>
        <TouchableOpacity
          style={{ flex: 2, alignItems: "center" }}
          onPress={onPress}
        >
          <Text>{showingDate}</Text>
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            alignItems: "flex-start"
          }}
        >
          <Text> ▷ </Text>
        </View>
      </View>
    );
  }
}

export default TodayDate;
