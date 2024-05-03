import { useState } from 'react';

export default function TestButton() {
    const [clicks, setClicks] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [values, setValues] = useState({
        x: 0,
        y: 0,
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

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <hr />
            <button onClick={handleClick}>Current: {clicks}</button>
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
