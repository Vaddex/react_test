// src/App.jsx

import { Product } from './Product';
import { Alert } from './Alert';
import TestButton from './TestButton/TestButton';
import TestReader from './TestReader/TestReader';
import articles from '../reader.json';
import Timer from './Timer/Timer';

export default function App() {
    return (
        <div>
            <h1>Best selling</h1>
            <>
                <TestButton />
            </>
            <>
                <Timer />
            </>
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
