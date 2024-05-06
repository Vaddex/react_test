import { useEffect } from 'react';

export default function Timer() {
    useEffect(() => {
        setInterval(() => {
            console.log(Date.nov());
        }, 1000);
    }, []);
    return <div>Timer</div>;
}
