import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '.';
import ModalController from '../components/ModalController';

type Props = NativeStackScreenProps<MainStackParamList, 'Home'>;

const HomeScreen = (props: Props) => {
    const { navigation } = props;
 
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>HomeScreen</Text>
            <Button title='Go to Profile Screen' onPress={() => navigation.navigate("Profile")} />
            <View style={{margin:5}} />
            <Button title='Open Modal' color={'#F41919'} onPress={() => {ModalController.showModal()}} />
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
