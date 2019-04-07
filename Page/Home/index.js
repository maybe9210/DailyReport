import React from "react";
import {TextInput, View, Keyboard} from "react-native";
import {Constants, Notifications, Permissions} from 'expo';

class HomeScreen extends React.Component {
  onSubmit(e) {
    Keyboard.dismiss();

    const localNotification = {
        title: 'done',
        body: 'done!'
    };

    const schedulingOptions = {
        time: (new Date()).getTime() + Number(e.nativeEvent.text)
    }

    // Notifications show only when app is not active.
    // (ie. another app being used or device's screen is locked)
    Notifications.scheduleLocalNotificationAsync(
        localNotification, schedulingOptions
    );
  }

  handleNotification(data) {
      console.warn('ok! got your notif' + JSON.stringify(data));
      if (data.origin == 'received') {
        alert(
          'Alert Title',
          'My Alert Msg',
          [
            {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
        )
      }
  }

  async componentDidMount() {
      // We need to ask for Notification permissions for ios devices
      let result = await Permissions.askAsync(Permissions.NOTIFICATIONS);

      if (Constants.isDevice && result.status === 'granted') {
          console.log('Notification permissions granted.')
      }

      // If we want to do something with the notification when the app
      // is active, we need to listen to notification events and 
      // handle them in a callback
      Notifications.addListener(this.handleNotification);
  }

  render() {
      return (
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
              <TextInput
                  onSubmitEditing={this.onSubmit}
                  placeholder={'time in ms'}
              />
          </View>
      );
  }
}
export default HomeScreen;
