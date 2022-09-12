import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '.';

type Props = NativeStackScreenProps<MainStackParamList, 'Home'>;

const HomeScreen = (props: Props) => {
    const { navigation } = props;
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>HomeScreen</Text>
            <Button title='Go to Profile Screen' onPress={() => navigation.navigate("Profile")} />
            <Button title='Open Modal' onPress={() => {}} />
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});