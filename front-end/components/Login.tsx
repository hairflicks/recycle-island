import { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, useColorScheme } from 'react-native';
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
        setCurrentUser(userData.data.user)
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
		<View style={styles.container}>
			<View style={styles.slider}>
				<TouchableOpacity
					style={styles.invertedButton}
					onPress={handleLoginPage}
				>
					<Text style={styles.invertedButtonText}>Login</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={handleSignUpPage}>
					<Text style={styles.buttonText}>Sign Up</Text>
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
					<TouchableOpacity style={styles.button} onPress={handleLogin}>
						<Text style={styles.buttonText}>Login</Text>
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
					<TouchableOpacity style={styles.button} onPress={handleSignUp}>
						<Text style={styles.buttonText}>Create Account</Text>
					</TouchableOpacity>
				</View>
			)}
			{error ? <Text>{error}</Text> : null}
		</View>
	);
}

export default Login;
