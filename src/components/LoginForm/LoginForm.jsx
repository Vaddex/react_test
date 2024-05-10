import { useId, useState } from 'react';

const LoginForm = () => {
    const [values, setValues] = useState({
        login: '',
        password: '',
    });

    // First variant
    // const handleLoginChange = evt => {
    //     setValues({
    //         ...values,
    //         login: evt.target.value,
    //     });
    // };
    // const handlePwdChange = evt => {
    //     setValues({
    //         ...values,
    //         password: evt.target.value,
    //     });
    // };

    // Second variant
    const handleChange = evt => {
        setValues({
            ...values,
            [evt.target.name]: evt.target.value,
        });
    };

    // id
    const loginId = useId();
    const passId = useId();

    const handleSubmit = evt => {
        evt.preventDefault();

        const form = evt.target;
        const { login, password } = form.elements;

        // Посилання на DOM-елементи
        console.log(login, password);

        // Значення полів
        // console.log(login.value, password.value);

        // Значення полів 2 variant
        console.log(values);

        // First variant reset form
        // form.reset();

        // Second variant
        setValues({
            login: '',
            password: '',
        });
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor={loginId}>Login</label>
            <input
                type="text"
                name="login"
                id={loginId}
                value={values.login}
                onChange={handleChange}
            />

            <label htmlFor={passId}>Password</label>
            <input
                type="password"
                name="password"
                id={passId}
                value={values.password}
                onChange={handleChange}
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
