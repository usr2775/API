import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { loginUser } from '../services/api'; 

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await response = await loginUser ({ username, password });
      setLoggedIn(true);
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      

      <Text style={styles.description}>
        Sumérgete en una experiencia única donde tu pasión por las cartas cobra
        vida. Descubre, organiza y comparte tu colección de cartas como nunca
        antes.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Username, Email & Phone Number"
        placeholderTextColor="#666161"
        onChangeText={(text) => setUsername(text)}
      />

      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Password"
        placeholderTextColor="#666161"
        onChangeText={(text) => setPassword(text)}
      />

      <Text style={styles.orText}>Olvido su contraseña</Text>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <View style={styles.divider}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>O regístrese con </Text>
        <View style={styles.dividerLine} />
      </View>

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: 40, 
  },
  title: {
    color: '#84A2C5',
    fontSize: 30,
    marginBottom: 20,
  },
  description: {
    width: 307,
    height: 66,
    fontFamily: 'Outfit',
    fontSize: 13,
    fontWeight: '300',
    fontStyle: 'normal',
    lineHeight: 13,
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  input: {
    width: 339,
    height: 59,
    borderRadius: 15,
    backgroundColor: '#F3F3F3',
    color: '#666161',
    fontSize: 15,
    marginBottom: 10,
    padding: 10,
  },
  loginButton: {
    width: 359,
    height: 59,
    borderRadius: 15,
    backgroundColor: '#84A2C5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 15,
  },
  orText: {
    color: '#84A2C5',
    fontSize: 12,
    marginLeft: 200,
    marginBottom: 30,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 359,
    marginBottom: 10,
  },
  dividerLine: {
    flex: 1,
    height: 3,
    backgroundColor: '#84A2C5',
    marginHorizontal: 5,
  },
  dividerText: {
    color: '#FFF',
    fontSize: 12,
    marginHorizontal: 10,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
    width: 300,
  },
});

export default LoginScreen;