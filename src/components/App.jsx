import { Product } from './Product';
import { Alert } from './Alert';
import { useState } from 'react';
// import axios from 'axios';
import { Audio } from 'react-loader-spinner';

// components
import TestButton from './TestButton/TestButton';
import TestReader from './TestReader/TestReader';
import SearchBar from './SearchBar/SearchBar';
import LangSwitcher from './LangSwitcher/LangSwitcher';
import LoginForm from './LoginForm/LoginForm';
import FeedbackForm from './FeedbackForm/FeedbackForm';
import ArticleList from './ArticleList/ArticleList';
import { fetchArticlesWithTopic } from '../articles-api';
import { SearchForm } from './SearchForm/SearchForm';
import Loader from './Loader/Loader';
import Error from './Error/Error.jsx';
// import Timer from './Timer/Timer';

// JSON datd
import articles from '../reader.json';

export default function App() {
    // state
    const [dataArcicles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSearch = async topic => {
        try {
            setLoading(true);
            setError(false);
            setArticles([]);
            const data = await fetchArticlesWithTopic(topic);
            setArticles(data);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

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
            <div>
                <SearchForm onSearch={handleSearch} />
                {loading && <Loader />}
                {error && <Error />}
                {dataArcicles.length > 0 && (
                    <ArticleList items={dataArcicles} />
                )}
            </div>
            <>
                <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="green"
                    ariaLabel="three-dots-loading"
                    wrapperStyle
                    wrapperClass
                />
            </>
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
                <br />
                <hr />
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
                <FeedbackForm />
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
