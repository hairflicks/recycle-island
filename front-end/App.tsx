import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet } from 'react-native';

import Login from './components/Login';
import Island from './components/Island'
import UserTask from './components/UserTask'
import Shop from './components/Shop';
import Profile from './components/Profile';
import { useEffect, useState } from 'react';

export default function App() {

	type User = {
		name: String,
		username: String,
		island: [],
		inventory: [],
		hash: String,
		credits: Number
		_v : Number,
		_id: Number
	  }		
	
	  const [currentUser, setCurrentUser] = useState<User | undefined>() 	
	  useEffect(() => {
		console.log(currentUser)
	  }, [currentUser])
	  const Stack = createNativeStackNavigator();

  return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen name="Login" component={Login} initialParams={{setCurrentUser}}/>
				<Stack.Screen name="Island" component={Island} initialParams={{currentUser}}/>
				<Stack.Screen name="UserTask" component={UserTask} initialParams={{currentUser}}/>
				<Stack.Screen name="Shop" component={Shop} initialParams={{currentUser}}/>
				<Stack.Screen name="Profile" component={Profile} initialParams={{setCurrentUser}}/>
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
