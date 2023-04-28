import { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './StyleSheetCSS';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [slider, setSlider] = useState(true);
  
    const handleLogin = (event: object) => {
      console.log(event)
      console.log(`Logging in with username: ${username}, password: ${password}`);
      setSlider(true)
      
    };

    const handleSignUp = () => {
      setSlider(false)
    }
  
    return (
      <View style={styles.container}>
        <View style={styles.slider}>
          
          <TouchableOpacity style={styles.invertedButton} onPress={handleLogin}>
            <Text style={styles.invertedButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        {slider
        ? 
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        : 
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value=''
            onChangeText={setUsername}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>
        </View>
        }
      </View>
    );
  }
  
  
  export default Login;