import React from 'react';
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import { useRegister } from '../hooks/useRegister'; // Asegúrate de que la ruta sea correcta

const RegisterScreen = ({ navigation }) => {
    const { email, setEmail, password, setPassword, handleRegister } = useRegister(navigation);

    return (
        <View>
            <TextInput
                placeholder="Correo electrónico"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Registrar" onPress={handleRegister} />
            <TouchableOpacity onPress={() => navigation.navigate('Recovery')}>
                <Text style={{ color: 'blue', marginTop: 10 }}>
                    ¿Olvidaste tu contraseña?
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default RegisterScreen;