import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle, Button, AsyncStorage } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { LongButton } from '../../components';
import DateTimePicker from 'react-native-modal-datetime-picker';
interface Props {
  navigation: NavigationScreenProp<any, any>;
}

interface State {
  isTimePickerVisible: boolean;
  startTime: Date | null;
  endTime: Date | null;
}

interface Style {
  container: ViewStyle;
  input1: ViewStyle;
  input2: ViewStyle;
  input3: ViewStyle;
  guide: TextStyle;
}

export default class Fourth extends React.Component<Props, State>{

  callbackTimepicker: (date: Date) => void = this.handleEndPicked;
  initialTime: Date = new Date();

  constructor(props: Props) {
    super(props)
    this.state = {
      isTimePickerVisible: false,
      startTime: null,
      endTime: null
    }
  }

  showTimePicker() {
    this.setState({ isTimePickerVisible: true });
  }

  hideTimePicker() {
    this.setState({ isTimePickerVisible: false });
  }

  handleStartPicekd(date: Date) {
    this.setState({
      ...this.state,
      startTime: date
    })
    this.hideTimePicker();
  }

  handleEndPicked(date: Date) {
    this.setState({
      ...this.state,
      endTime: date
    })
    this.hideTimePicker();
  }

  async submit() {
    const { navigation } = this.props;
    const { startTime, endTime } = this.state;
    
    const data = {
      startTime : startTime && startTime.toLocaleTimeString('en-US'),
      endTime: endTime && endTime.toLocaleTimeString('en-US')
    }

    console.log(JSON.stringify(data));
    try {
      await AsyncStorage.setItem('@TimeInfo',JSON.stringify(data));
      navigation.navigate('MainTabScreen');
    } catch(e) {
      console.log(e);
    }
  }
  render() {
    const { isTimePickerVisible, startTime, endTime } = this.state;

    return (
      <View style={styles.container}>
        <Button title="시작하는 시간" onPress={() => {
          if (!startTime) {
            this.initialTime = new Date(2019, 1, 1, 9, 0);
          } else {
            this.initialTime = startTime;
          }
          this.callbackTimepicker = this.handleStartPicekd;
          this.showTimePicker();
        }} />
        <Button title="끝나는 시간" onPress={() => {
          if (!endTime) {
            this.initialTime = new Date(2019, 1, 1, 18, 0);
          } else {
            this.initialTime = endTime;
          }
          this.callbackTimepicker = this.handleEndPicked;
          this.showTimePicker();
        }} />
        <Text style={[styles.guide]}>꼭 필요한 정보이니 반드시 기입해 주세요.</Text>
        <LongButton goto={this.submit.bind(this)}>시작하기</LongButton>
        <DateTimePicker
          date={this.initialTime}
          mode='time'
          isVisible={isTimePickerVisible}
          onCancel={this.hideTimePicker.bind(this)}
          onConfirm={this.callbackTimepicker.bind(this)} />
      </View>
    )
  }
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input1: {
    width: 305,
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E6',
    marginBottom: 11.1,
    marginTop: 237.5
  },
  input2: {
    width: 305,
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E6',
    marginBottom: 11.1
  },
  input3: {
    width: 305,
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E6',
  },
  guide: {
    color: '#354052',
    fontSize: 12.5,
    marginTop: 90,
    marginBottom: 78.8
  }
});