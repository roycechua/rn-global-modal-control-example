import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/screens';

export default function App() {
	return <NavigationContainer>
    <MainStack/>
  </NavigationContainer>
}
