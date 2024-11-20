import { useState } from 'react';

export const useAuth = () => {
    const [users, setUsers] = useState({});

    const register = (email, password) => {
        console.log(`Correo: ${email} password: ${password}`);
        return new Promise((resolve, reject) => {
            if (users[email]) {
                return reject(new Error('El correo ya está registrado'));
            }
            const newUsers = { ...users };
            const code = Math.floor(100000 + Math.random() * 900000).toString();
            console.log(`Código generado para el correo ${email}: ${code}`);
            newUsers[email] = { password, code };
            setUsers(newUsers);
            console.log(users);
            resolve();
        });
    };

    const requestCode = (email) => {
        return new Promise((resolve, reject) => {
            const user = users[email];
            console.log(`Correo ${user}`);
            if (!user) {
                return reject(new Error('Correo no registrado'));
            }
            Alert.alert('Código de verificación', user.code);
            resolve();
        });
    };

    const recoverPassword = (email, code) => {
        return new Promise((resolve, reject) => {
            const user = users[email];
            if (!user) {
                return reject(new Error('Correo no registrado'));
            }
            if (user.code !== code) {
                return reject(new Error('Código incorrecto'));
            }
            Alert.alert('Tu contraseña es:', user.password);
            resolve();
        });
    };

    return { register, requestCode, recoverPassword };
};