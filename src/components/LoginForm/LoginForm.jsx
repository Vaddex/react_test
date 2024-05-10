import { useId } from 'react';

const LoginForm = () => {
    const loginId = useId();
    const passId = useId();

    const handleSubmit = evt => {
        evt.preventDefault();

        const form = evt.target;
        const { login, password } = form.elements;

        // Посилання на DOM-елементи
        console.log(login, password);

        // Значення полів
        console.log(login.value, password.value);

        // Скидаємо значення полів після відправки
        form.reset();
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor={loginId}>Login</label>
            <input type="text" name="login" id={loginId} />

            <label htmlFor={passId}>Password</label>
            <input type="password" name="password" id={passId} />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
