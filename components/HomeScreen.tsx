// HomeScreen.js

import React from 'react';
import { View, Button } from 'react-native';
import { logoutUser } from '../services/api'; // Importa la función para cerrar sesión

const HomeScreen = () => {
  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (error) {
    }
  };

  return (
    <View>
      <Button title="Cerrar Sesión" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;
