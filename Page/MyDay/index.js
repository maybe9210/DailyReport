import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  TouchableHighlight
} from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import moment from "moment";
import ConcetrationItem from "./ConcetrationItem";

class MyDay extends Component {
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

  onPressDate = () => {
    this.setState({ isCalendar: true });
  };

  hideCalendar = () => {
    this.setState({ isCalendar: false });
  };

  render() {
    const showingDate = this.state.date.format("YYYY.MM.DD");
    const remainTime = this.state.remainTime;
    const isCalendar = false;
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
     *
     * ]
     */
    const concetrationArray = [
      {
        starttime: "2019-05-05,03:00:00",
        endtime: "2019-05-05,03:05:00",
        concetration: "high", // high, middle, low
        categories: ["study", "study", "work", "work"]
      },
      {
        starttime: "2019-05-05,03:05:00",
        endtime: "2019-05-05,03:10:00",
        concetration: "high", // high, middle, low
        categories: ["study", "study", "work"]
      }
    ];
    const itemArrayView = concetrationArray.map((itemObj, idx) => {
      return <ConcetrationItem key={idx} data={itemObj} />;
    });
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column"
        }}
      >
        <View // 날짜
          style={{
            flex: 1,
            flexDirection: "row",
            marginTop: 50,
            alignItems: "center",
            backgroundColor: "red"
          }}
        >
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
            onPress={this.onPressDate}
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

        <View style={{ flex: 4, alignItems: "center" }}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.isCalendar}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View style={{ marginTop: 22 }}>
              <View>
                <CalendarList
                  onDayPress={day => {
                    console.log("selected day", day);
                    this.hideCalendar();
                  }}
                />
              </View>
            </View>
          </Modal>
        </View>

        <View //집중도 그래프
          style={{
            flex: 4,
            flexDirection: "column",
            backgroundColor: "yellow"
          }}
        >
          {itemArrayView}
        </View>
        <View // 다음 입력까지 남은 시간
          style={{
            flex: 2,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "green"
          }}
        >
          <Text>{remainTime}</Text>
        </View>
      </View>
    );
  }
}
export default MyDay;
