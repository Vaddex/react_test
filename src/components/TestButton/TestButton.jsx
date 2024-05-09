import { useState, useEffect } from 'react';

export default function TestButton() {
    const [clicks, setClicks] = useState(() => {
        // Зчитуємо значення за ключем
        const savedClicks = window.localStorage.getItem('saved-clicks');

        // Якщо там щось є, повертаємо це
        // значення як початкове значення стану
        if (savedClicks !== null) {
            return JSON.parse(savedClicks);
        }
        return 0;
    });

    // modal
    const [isOpen, setIsOpen] = useState(false);
    const [values, setValues] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        document.title = `You clicked ${clicks} times`;
        console.log('Clicks updated: ', clicks);
    }, [clicks]);

    useEffect(() => {
        window.localStorage.setItem('saved-clicks', clicks);
        // window.localStorage.setItem('key', JSON.stringify({}));
    });

    const updateX = () => {
        setValues({
            ...values,
            x: values.x + 1,
        });
    };

    const updateY = () => {
        setValues({
            ...values,
            y: values.y + 1,
        });
    };

    const handleClick = () => {
        setClicks(clicks + 1);
    };

    // modal
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <hr />
            <button onClick={handleClick}>Current: {clicks}</button>
            <button onClick={() => setClicks(0)}>Reset</button>
            <hr />

            <button onClick={updateX}>Update X</button>
            <button onClick={updateY}>Update Y</button>
            <div>
                <p>
                    x: {values.x}, y: {values.y}
                </p>
                <hr />
            </div>

            <button onClick={handleToggle}>{isOpen ? 'Hide' : 'Show'}</button>
            {isOpen && <p>Now you can see me!</p>}
            <hr />
            <br />
            <br />
            <br />
        </>
    );
}
