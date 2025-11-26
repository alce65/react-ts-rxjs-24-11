import { Card } from '@components/core/card/card';
import React, { useState } from 'react';
import type { Login } from '../../types/user';
import { loginUserService } from '../../services/user.service';

const initialLogin: Login = {
    email: '',
    passwd: '',
    rememberMe: false,
};

export const LoginForm: React.FC = () => {

    const [userData, setUserData] = useState(initialLogin);

    const handleChange: React.ChangeEventHandler<HTMLInputElement>  = (event) => {
       /// Actualiza el estado del formulario

       const { name, type, value, checked } = event.target;

        const newValue = type === 'checkbox' ? checked : value;
         setUserData({
            ...userData,
            [name]: newValue,
         });
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        // Aquí se podría llamar al servicio de login con los datos del formulario
        
        console.log("HANDLE SUBMIT", userData);
        
        loginUserService(userData).then(() => {
            // Manejar la respuesta del servicio si es necesario
        });
    };

    return (
        <Card title="Formulario de Login">
            <form onSubmit={handleSubmit}>
                <p>Ejemplo de 'Controlled Form'</p>
                <div className="group-control">
                    <input
                        type="email"
                        name="email"
                        placeholder="Dime tu email"
                        aria-label="email"
                        required
                        value={userData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="group-control">
                    <input
                        type="password"
                        name="passwd"
                        placeholder="Dime tu password"
                        required
                        value={userData.passwd}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="rememberMe">
                        <input
                            id="rememberMe"
                            type="checkbox"
                            name="rememberMe"
                            aria-label="rememberMe"
                            checked={userData.rememberMe}
                            onChange={handleChange}
                        />
                        Recuérdame
                    </label>
                </div>
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </Card>
    );
};
