import React from 'react';
import { View, TextInput, Button, Modal, StyleSheet, Text } from 'react-native';
import { useRecovery } from '../hooks/useRecovery'; // Asegúrate de que la ruta sea correcta

const RecoveryScreen = () => {
    const { email, setEmail, code, setCode, modalVisible, setModalVisible, handleRequestCode, handleVerifyCode } = useRecovery();

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Correo electrónico"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
            <Button title="Solicitar recuperación" onPress={handleRequestCode} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Ingresa el código de 6 dígitos</Text>
                    <TextInput
                        placeholder="Código"
                        value={code}
                        onChangeText={setCode}
                        style={styles.input}
                    />
                    <Button title="Verificar código" onPress={handleVerifyCode} />
                    <Button title="Cancelar" onPress={() => setModalVisible(false)} />
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
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
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default RecoveryScreen;