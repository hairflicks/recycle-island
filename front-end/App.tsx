import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet} from 'react-native';

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
		inventory: {},
		hash: String,
		credits: Number
		_v : Number,
		_id: Number
	  }		
	
	  const [currentUser, setCurrentUser] = useState<User | undefined>({
		name: 'Jake',
		username: 'TheGuy',
		island: [
			  {
				itemName: "Dragon",
				coordinates: [0, -1.3],
			  },
			  {
				itemName: "Goat",
				coordinates: [-.7, -.4],
			  },
			  {
				itemName: "Koala",
				coordinates: [.7, .4],
			  },
			  {
				itemName: "Lion",
				coordinates: [0.0, 0.0, 1.0],
			  },
			  {
				itemName: "Bee",
				coordinates: [-.8, 1.3],
			  },
			  {
				itemName: "Chicken",
				coordinates: [0, 1.3],
			  },
		],
		inventory: {Bee: 2, Chicken: 3, Lion: 1, Koala:6},
		hash: 'sdghsdhgsd',
		credits: 0,
		_v : 0,
		_id: 343463426264
	  }) 

	  useEffect(() => {
		// console.log(currentUser)
	  }, [currentUser])
	  const Stack = createNativeStackNavigator();

  return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen name="Login" component={Login} initialParams={{setCurrentUser}}/>
				<Stack.Screen name="Island" component={Island} initialParams={{currentUser, setCurrentUser}}/>
				<Stack.Screen name="Tasks" component={UserTask} initialParams={{currentUser, setCurrentUser}}/>
				<Stack.Screen name="Shop" component={Shop} initialParams={{currentUser, setCurrentUser}}/>
				<Stack.Screen name="Profile" component={Profile} initialParams={{setCurrentUser, currentUser}}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
