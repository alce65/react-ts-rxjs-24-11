import { Card } from '@components/core/card/card';
import React from 'react';
import type { Register } from '../../types/user';

const initialFormData: Register = {
    userName: '',
    email: '',
    passwd: '',
    isOkConditions: false,
    turn: '',
    course: '',
};

export const RegisterForm: React.FC = () => {
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        // Accedemos a los datos del formulario usando 'event.currentTarget'
        const form = event.currentTarget;
        const formData = new FormData(form); // Puedes usar FormData para obtener los datos fácilmente
        console.log(formData);

        // const record: Record<string, string | boolean> = {};

        // formData.forEach((value, key) => {
        //     let val: string | boolean = value as string
        //     if (key === 'isOkConditions') {
        //         val = formData.get(key) === 'on' ? true : false
        //     }
        //     record[key] = val
        // });
        // console.log(record);

        const record: Record<string, string | boolean> = {};

        Object.keys(initialFormData).forEach((key) => {
            const element = form.elements.namedItem(key);
            record[key] =
                element instanceof HTMLInputElement && element.type === 'checkbox'
                    ? element.checked
                    : (element as HTMLInputElement | HTMLSelectElement).value;
        });
        console.log(record);

        // Aquí puedes manejar el envío de datos, por ejemplo, llamando a un servicio
    };

    return (
        <Card title="Formulario de Registro">
            <form onSubmit={handleSubmit} aria-label="register-form">
                <p>Ejemplo de 'UnControlled Form'</p>

                <div className="group-control">
                    <input
                        type="text"
                        name="userName"
                        placeholder="Dime tu nombre"
                        aria-label="name"
                        required
                        //defaultValue={userDataInitial.userName}
                    />
                </div>

                <div className="group-control">
                    <input
                        type="email"
                        name="email"
                        placeholder="Dime tu email"
                        aria-label="email"
                        required
                        //defaultValue={userDataInitial.email}
                    />
                </div>

                <div className="group-control">
                    <input
                        type="password"
                        name="passwd"
                        placeholder="Dime tu password"
                        aria-label="password"
                        required
                        //defaultValue={userDataInitial.passwd}
                    />
                </div>

                <div className="group-control">
                    <input
                        type="checkbox"
                        name="isOkConditions"
                        aria-label="conditions"
                        id="cr-is-ok"
                        //defaultChecked={userDataInitial.isOkConditions}
                    />
                    <label htmlFor="is-ok">Acepto las condiciones...</label>
                </div>

                <fieldset name="turn">
                    <legend>Selecciona un turno</legend>
                    <input
                        type="radio"
                        name="turn"
                        aria-label="turn"
                        id="cr-turno-m"
                        value="M"
                    />
                    <label htmlFor="turno-m">Mañana</label>
                    <input type="radio" name="turn" id="cr-turno-t" value="T" />
                    <label htmlFor="turno-t">Tarde</label>
                    <input type="radio" name="turn" id="cr-turno-n" value="N" />
                    <label htmlFor="turno-n">Noche</label>
                </fieldset>

                <label htmlFor="course">Elige un curso</label>
                <select
                    name="course"
                    aria-label="course"
                    id="cr-course"
                    //defaultValue={userDataInitial.course}
                >
                    <option value=""></option>
                    <option value="A">Angular</option>
                    <option value="R">React</option>
                    <option value="N">Node</option>
                </select>
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </Card>
    );
};
