import React, { createRef, useLayoutEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/screens';
import CustomModal from './src/components/CustomModal';

export default function App() {  
	return <NavigationContainer>
    <MainStack/>
    <CustomModal/>
  </NavigationContainer>
}
