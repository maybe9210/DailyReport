import React from 'react';
import { View, StyleSheet, Text, ViewStyle, TextStyle, ShadowStyleIOS, TouchableHighlight } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { LongButton } from '../../components';

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

interface State {

}

interface Style {
  container: ViewStyle;
  itemBox: ViewStyle;
  itemText: TextStyle;
  itemRow: ViewStyle;
  itemContainer: ViewStyle;
  guide: TextStyle;
  shadow: ViewStyle;
}
export default class Third extends React.Component<Props, State>{

  renderItem(label: string, selected: boolean, index: number) {
    return (
      <View style={[styles.itemBox, styles.shadow, ]}>
        <TouchableHighlight onPress={console.log}>
          <Text style={styles.itemText}>{label}</Text>
        </TouchableHighlight>
      </View>
    )
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Text>Reports 탭 이미지</Text>
        </View>
        <Text style={styles.guide}>설명 문구</Text>
        <LongButton goto={
          () => { navigation.navigate('Entry4'); }
        }>
          다음
        </LongButton>
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
  itemBox: {
    backgroundColor: 'white',
    // width: 60,
    height: 50,
    marginRight: 6.9,
    marginLeft: 6.9,
    paddingTop: 15.5,
    paddingBottom: 15.5,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  shadow: {
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 3.5,
    shadowOpacity: 0.1,
    shadowColor: '#000000',
  },
  itemText: {
    fontSize: 13.8,
    color: '#354052',
  },
  itemRow: {
    flex:1,
    height: 45,
    width: 330,
    marginBottom: 13.8,
    marginEnd: 0,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemContainer: {
    height: 340,
    marginTop: 89.8,
    marginBottom: 71
  },
  guide: {
    marginBottom: 78.8
  }
});