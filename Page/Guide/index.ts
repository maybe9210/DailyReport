import Entry1 from './Entry1';
import Entry2 from './Entry2';
import Entry3 from './Entry3';
import Entry4 from './Entry4';
import { createStackNavigator } from 'react-navigation';

const EntryScreen = createStackNavigator({
  Entry1: Entry1,
  Entry2: Entry2,
  Entry3: Entry3,
  Entry4: Entry4,
},{
  headerMode: 'none'
})

export {
  EntryScreen
}