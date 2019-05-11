import React from 'react';
import { View, StyleSheet, Text, ViewStyle, TextStyle } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { LongButton } from '../../components';

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

interface State {

}

interface Style {
  container: ViewStyle;
  input1: ViewStyle;
  input2: ViewStyle;
  input3: ViewStyle;
  itemContainer: ViewStyle;
  guide: TextStyle;
}

export default class Second extends React.Component<Props, State>{
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Text>MyDay 탭 이미지</Text>
        </View>
        <Text style={[styles.guide]}>MyDay 설명에 대한 공백</Text>
        <LongButton goto={() => { navigation.navigate('Entry3'); }}>다음</LongButton>
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
    marginBottom: 78.8
  },
  itemContainer: {
    height: 340,
    marginTop: 89.8,
    marginBottom: 71
  }
});