import { useState } from 'react';

export default function TestButton() {
    // let clicks = 0;
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        // clicks = clicks + 1;
        setClicks(clicks + 1);
    };
    return <button onClick={handleClick}>Current: {clicks}</button>;
}
