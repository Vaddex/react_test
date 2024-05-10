import { Product } from './Product';
import { Alert } from './Alert';
import { useState } from 'react';
import TestButton from './TestButton/TestButton';
import TestReader from './TestReader/TestReader';
import articles from '../reader.json';
import SearchBar from './SearchBar/SearchBar';
import LangSwitcher from './LangSwitcher/LangSwitcher';
import LoginForm from './LoginForm/LoginForm';
// import Timer from './Timer/Timer';

export default function App() {
    // LangSwitcher
    const [lang, setLang] = useState('ua');

    // coffeeSize
    const [coffeeSize, setCoffeeSize] = useState('md');
    const handleSize = evt => {
        setCoffeeSize(evt.target.value);
    };

    //hasAccepted
    const [hasAccepted, setHasAccepted] = useState(false);
    const handleChange = evt => {
        setHasAccepted(evt.target.checked);
    };

    return (
        <div>
            <h1>Best selling</h1>
            <>
                <LoginForm />
                <hr />
            </>
            <>
                <p>Selected language: {lang}</p>
                <LangSwitcher value={lang} onSelect={setLang} />
                <br />
                <hr />
            </>
            <>
                <br />
                <SearchBar />
            </>
            <>
                <h2>Select coffee size</h2>
                <label>
                    <input
                        type="radio"
                        name="coffeeSize"
                        value="sm"
                        checked={coffeeSize === 'sm'}
                        onChange={handleSize}
                    />
                    Small
                </label>
                <label>
                    <input
                        type="radio"
                        name="coffeeSize"
                        value="md"
                        checked={coffeeSize === 'md'}
                        onChange={handleSize}
                    />
                    Meduim
                </label>
                <label>
                    <input
                        type="radio"
                        name="coffeeSize"
                        value="lg"
                        checked={coffeeSize === 'lg'}
                        onChange={handleSize}
                    />
                    Large
                </label>
                <br />
                <hr />
            </>
            <>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="terms"
                            checked={hasAccepted}
                            onChange={handleChange}
                        />
                        I accept terms and conditions
                    </label>
                    <button type="button" disabled={!hasAccepted}>
                        Proceed
                    </button>
                </div>
            </>
            <>
                <br />
                <TestButton />
            </>
            <>{/* <Timer /> */}</>
            <>
                <TestReader articles={articles} />
            </>
            <Product
                name="Tacos With Lime"
                imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
                price={10.99}
            />
            <Product
                name="Fries and Burger"
                imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
                price={14.29}
            />
            <div>
                <>
                    <Alert variant="info">
                        Would you like to browse our recommended products?
                    </Alert>
                    <Alert variant="error" outlined>
                        There was an error during your last transaction
                    </Alert>
                    <Alert variant="success" elevated>
                        Payment received, thank you for your purchase
                    </Alert>
                    <Alert variant="warning" elevated outlined>
                        Please update your profile contact information
                    </Alert>
                </>
            </div>
        </div>
    );
}
