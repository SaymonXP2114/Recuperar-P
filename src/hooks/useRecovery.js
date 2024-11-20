import { useState } from 'react';
import { useAuth } from './useAuth'; // Asegúrate de que la ruta sea correcta

export const useRecovery = () => {
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const { recoverPassword, requestCode } = useAuth();

    const handleRequestCode = () => {
        return requestCode(email)
            .then(() => {
                setModalVisible(true);
            })
            .catch(err => {
                alert(err.message);
            });
    };

    const handleVerifyCode = () => {
        return recoverPassword(email, code)
            .then(password => {
                alert('Tu contraseña es: ' + password);
                setModalVisible(false);
            })
            .catch(err => {
                alert(err.message);
            });
    };

    return {
        email,
        setEmail,
        code,
        setCode,
        modalVisible,
        setModalVisible,
        handleRequestCode,
        handleVerifyCode,
    };
};