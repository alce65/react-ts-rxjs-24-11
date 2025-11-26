import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginForm } from './login-form';
import type { Login } from '../../types/user';
import { loginUserService } from '../../services/user.service';

vi.mock('../../services/user.service', () => ({
    loginUserService: vi.fn().mockResolvedValue(undefined),
}));

describe('Login Form Component', () => {
    const dataMock: Login = {
        email: 'test@sample.com',
        passwd: '12345',
        rememberMe: false,
    };

    beforeEach(() => {
        // Configuración previa a cada prueba si es necesario
        render(<LoginForm />);
    });

    test('should render login form correctly', () => {
        // Aquí irían las pruebas para verificar que el formulario de login se renderiza correctamente
        const element = screen.getByText(/login/i);
        expect(element).toBeInTheDocument();
    });

    test('should show email error when email is empty', async () => {
        const emailInput = screen.getByLabelText(/email/i);
        const submitButton = screen.getByRole('button', { name: /enviar/i });
        await userEvent.clear(emailInput);
        expect(emailInput).toHaveValue('');
        await userEvent.click(submitButton);
        expect(emailInput).toBeInvalid();
    });

    test('should show password error when password is empty', async () => {
        const passwordInput = screen.getByPlaceholderText(/password/i);
        const submitButton = screen.getByRole('button', { name: /enviar/i });

        await userEvent.clear(passwordInput);
        expect(passwordInput).toHaveValue('');
        await userEvent.click(submitButton);
        expect(passwordInput).toBeInvalid();
    });

    test('should submit form with valid data', async () => {
        const emailInput = screen.getByPlaceholderText(
            /email/i
        ) as HTMLInputElement;
        expect(emailInput).toBeInTheDocument();
        const passwordInput = screen.getByPlaceholderText(
            /password/i
        ) as HTMLInputElement;
        expect(passwordInput).toBeInTheDocument();
        const rememberMeCheckbox = screen.getByLabelText(
            /recuérdame/i
        ) as HTMLInputElement;
        expect(rememberMeCheckbox).toBeInTheDocument();
        const submitButton = screen.getByRole('button', { name: /enviar/i });
        expect(submitButton).toBeInTheDocument();

        // Simula la entrada de datos en el formulario
        await userEvent.type(emailInput, dataMock.email);
        expect(emailInput.value).toBe(dataMock.email);
        await userEvent.type(passwordInput, dataMock.passwd);
        expect(passwordInput.value).toBe(dataMock.passwd);
        if (dataMock.rememberMe) {
            await userEvent.click(rememberMeCheckbox);
        }
        // Simula el envío del formulario
        await userEvent.click(submitButton);
        expect(loginUserService).toHaveBeenCalledWith(dataMock);
    });
});
