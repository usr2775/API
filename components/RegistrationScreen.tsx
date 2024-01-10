import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { registerUser } from '../services/api';

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleRegistro = async () => {
    try {
      await registerUser({ username, email, contrasena });
    } catch (error) {
    }


  return (
    <View>
      <TextInput placeholder="Nombre" value={nombre} onChangeText={setNombre} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        value={contrasena}
        onChangeText={setContrasena}
      />
      <Button title="Registrarse" onPress={handleRegistro} />
    </View>
  );
};

export default RegistrationScreen;
