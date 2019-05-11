import React from 'react';
import { Text, View, StyleSheet, Platform, PixelRatio } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { LongButton } from '../../components';

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

interface State {

}

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Entry1 extends React.Component<Props, State>{
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.area1}>
          <Text style={styles.welcome}>시간을 관리해보세요</Text>
        </View>
        <View style={styles.area2}>
          <Text style={styles.instructions}>주기적으로 하는 일을 입력하고</Text>
          <Text style={styles.instructions}>딱 맞는 맞춤형 레포트를 받아보세요!</Text>
        </View>
        <LongButton goto={() => {
          navigation.navigate('Entry2');
        }}>둘러보기</LongButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  area1:{
    paddingTop: 242.5,
    paddingBottom: 47.5
  },
  area2:{
    paddingBottom: 214.8
  },
  welcome: {
    fontSize: 22.5,
    textAlign: 'center',
    margin: 10,
    color: '#354052'
  },
  instructions: {
    fontSize: 13.8,
    textAlign: 'center',
    color: '#354052',
    marginBottom: 5,
  },
});