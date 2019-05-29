import React from "react";
import {Text, View, StyleSheet} from "react-native";
import {Constants, Notifications, Permissions} from 'expo';


class Popup extends React.Component {  

  async componentDidMount() {    
  }

  render() {
      return (
          <View className="PopupBg" style={styles.container}>
            
                <Text>Select your concentrate level</Text>
            
              
          </View>
      );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'yellow'

    }
})

export default Popup;
