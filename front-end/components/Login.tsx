import { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, useColorScheme, Image } from 'react-native';
import { styles } from './StyleSheetCSS';
import { getUserByUsername, postUser } from '../api';
import bcrypt from 'bcryptjs';

type LoginProps = {
	navigation: { navigate: Function };
    route: {params: {setCurrentUser: Function}}
};

function Login({ navigation, route }: LoginProps) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [slider, setSlider] = useState(true);
	const [error, setError] = useState('');

	console.log(error, 'hi')

  const {setCurrentUser} = route.params

	const handleLoginPage = (event: object) => {
		console.log(`Logging in with username: ${username}, password: ${password}`);
		setSlider((slider) => true);
		setError('');
	};

	const handleSignUpPage = (event: object) => {
		console.log(`Logging in with username: ${username}, password: ${password}`);
		setSlider((slider) => false);
		setError('');
	};

	const handleSignUp = async () => {
		try {
			await postUser(name, username, password);
			setSlider((slider) => !slider);
			setPassword('');
			setName('');
			setError('');
		} catch (error: any) {
			setError(error.response.data.message);
		}
	};

	const handleLogin = async () => {
		try {
			const userData = await getUserByUsername(username);
			if (await bcrypt.compare(password, userData.data.user.hash)) {
        await setCurrentUser(userData.data.user)
		setError('')
        navigation.navigate('Island');
      } else {
			setError('Incorrect password...');
	  }
		} catch (error: any) {
			if (error.response.data.message) {
				setError(error.response.data.message)
			} else {
			setError("Unable to process request. Check your connection...")
			};
		}
	};

	return (
		<View className={'items-center'}>
			<Text className={'text-4xl font-bold text-green-700 mt-5 mb-5'}>RECYCLAND</Text>
			<Image className={'w-20 h-20'} source={require('../assets/recycletree.png')}/>
			<View className='flex-row mt-5 mb-5'>
				<TouchableOpacity
					className={'bg-green-800 border-2 border-green-200 rounded-lg p-4 mr-5'}
					onPress={handleLoginPage}
				>
					<Text className={'text-center text-base font-bold text-green-200 w-20'}>Login</Text>
				</TouchableOpacity>
				<TouchableOpacity className={'bg-green-800 border-2 border-green-200 rounded-lg p-4'} onPress={handleSignUpPage}>
					<Text className={'text-center text-base font-bold text-green-200 w-20'}>Sign Up</Text>
				</TouchableOpacity>
			</View>

			{slider ? (
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholder='Username'
						value={username}
						onChangeText={setUsername}
					/>
					<TextInput
						style={styles.input}
						placeholder='Password'
						secureTextEntry={true}
						value={password}
						onChangeText={setPassword}
					/>
					<TouchableOpacity className={'bg-green-800 border-4 border-green-200 rounded-lg p-4'} onPress={handleLogin}>
						<Text className={'text-center text-base font-bold text-green-200'}>Login</Text>
					</TouchableOpacity>
				</View>
			) : (
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholder='Name'
						value={name}
						onChangeText={setName}
					/>
					<TextInput
						style={styles.input}
						placeholder='Username'
						value={username}
						onChangeText={setUsername}
					/>
					<TextInput
						style={styles.input}
						placeholder='Password'
						secureTextEntry={true}
						value={password}
						onChangeText={setPassword}
					/>
					<TouchableOpacity className={'bg-green-800 border-4 border-green-200 rounded-lg p-4'} onPress={handleSignUp}>
						<Text className={'text-center text-base font-bold text-green-200'}>Create Account</Text>
					</TouchableOpacity>
				</View>
			)}
			{error ? <Text>{error}</Text> : null}
		</View>
	);
}

export default Login;
