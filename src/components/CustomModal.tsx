import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import React, {
	forwardRef,
	useImperativeHandle,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';
import ModalController, { CustomModalRef } from './ModalController';

const CustomModal = () => {
	const [modalVisible, setModalVisible] = useState(false);
    const [customMessage, setCustomMessage] = useState("");

	const modalRef = useRef<CustomModalRef>();

    useLayoutEffect(() => {
        ModalController.setModalRef(modalRef)
    }, [])
    
	useImperativeHandle(
		modalRef,
		() => ({
			show: (message?: string) => {
				setModalVisible(true);
                if(message) {
                    setCustomMessage(message)
                }
			},
			hide: () => {
				setModalVisible(false);
                setCustomMessage("");
			},
		}),
		[]
	);

	return (
		<Modal
			animationType='fade'
			transparent={true}
			visible={modalVisible}
			onRequestClose={() => {
				Alert.alert('Modal has been closed.');
				ModalController.hideModal();
			}}
		>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<Text style={styles.modalText}>Hello World!</Text>
                    {customMessage ? <Text style={styles.modalText}>{customMessage}</Text> : null}
					<Pressable
						style={[styles.button, styles.buttonClose]}
						onPress={() => ModalController.hideModal()}
					>
						<Text style={styles.textStyle}>Hide Modal</Text>
					</Pressable>
				</View>
			</View>
		</Modal>
	);
};

export default forwardRef(CustomModal);

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: '#F194FF',
	},
	buttonClose: {
		backgroundColor: '#2196F3',
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalText: {
		marginBottom: 15,
		textAlign: 'center',
	},
});
