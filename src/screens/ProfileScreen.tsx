import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '.';

type Props = NativeStackScreenProps<MainStackParamList, 'Profile'>;

const ProfileScreen = (props: Props) => {
    const { navigation } = props;
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>ProfileScreen</Text>
            <Button title='Go to Home Screen' onPress={() => navigation.navigate("Home")} />
            <View style={{margin:5}} />
            <Button title='Open Modal' color={'#F41919'} onPress={() => {}} />
		</View>
	);
};

export default ProfileScreen;

const styles = StyleSheet.create({});
