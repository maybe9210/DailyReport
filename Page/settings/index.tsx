import React from 'react';
import { View, StyleSheet, Text, ViewStyle, AsyncStorage } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

interface State {
  startTime: string;
  endTime: string;
}

interface Style {
  container: ViewStyle;
}

class SettingsMain extends React.Component<Props, State>{
  
  constructor(props: Props) {
    super(props)
    
    this.state = {
      startTime: 'loading...',
      endTime: 'loading...'
    }
    this.getStorage();
  }

  async getStorage() {
    try {
      const value = await AsyncStorage.getItem('@TimeInfo');
      if (value == null) {
        throw new Error();
      }
      const parsed = JSON.parse(value);
      this.setState({
        startTime: parsed.startTime,
        endTime: parsed.endTime
      })
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const { startTime, endTime } = this.state;
    return (
      <View style={styles.container}>
        <Text>Settings</Text>
        <Text>{startTime}</Text>
        <Text>{endTime}</Text>
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
});

export {
  SettingsMain
}