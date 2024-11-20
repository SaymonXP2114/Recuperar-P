import { useState } from 'react';
import { useAuth } from './useAuth'; // Asegúrate de que la ruta sea correcta

export const useRegister = (navigation) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register } = useAuth();

    const handleRegister = () => {
        return register(email, password)
            .then(() => {
                alert('Registro exitoso');
                navigation.navigate('Recovery'); // Redirige a la pantalla de recuperación
            })
            .catch(err => {
                alert(err.message);
            });
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        handleRegister,
    };
};