import { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, useColorScheme } from 'react-native';
import { styles } from './StyleSheetCSS';
import { postUser } from '../api';
import { Color } from 'three';
import { AxiosError } from 'axios';

type LoginProps = {
	navigation: { navigate: Function };
};

function Login({ navigation }: LoginProps) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [slider, setSlider] = useState(true);
  const [error, setError] = useState('');

	const handlePresentPage = (event: object) => {
		console.log(`Logging in with username: ${username}, password: ${password}`);
		setSlider((slider) => !slider);
	};

	const handleSignUp = async () => {   
    try{
      await postUser(name, username, password);
      setSlider((slider) => !slider)
      setPassword('')
      setName('')
    } catch (error: any){
      setError(error.response.data.message);
    }
	};

	const handleLogin = (): void => {
		navigation.navigate('Island');
	};

		return (
			<View style={styles.container}>
				<View style={styles.slider}>
					<TouchableOpacity
						style={styles.invertedButton}
						onPress={handlePresentPage}
					>
						<Text style={styles.invertedButtonText}>Login</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={handlePresentPage}>
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
				{error ? (
					<Text>{error}</Text>
				) : null}
			</View>
		);
}

export default Login;
