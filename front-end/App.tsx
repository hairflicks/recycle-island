import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet } from 'react-native';

import Login from './components/Login';
import Island from './components/Island'
import UserTask from './components/UserTask'
import Shop from './components/Shop';
import Profile from './components/Profile';



export default function App() {

  const Stack = createNativeStackNavigator();

  return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Shop">
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Island" component={Island} />
				<Stack.Screen name="UserTask" component={UserTask} />
				<Stack.Screen name="Shop" component={Shop} />
				<Stack.Screen name="Profile" component={Profile} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
