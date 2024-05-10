import { useState } from 'react';

const SearchBar = () => {
    const [inputValue, setInputValue] = useState();

    const handleChange = evt => {
        setInputValue(evt.target.value);
    };
    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
            ></input>
            <p>{inputValue}</p>
        </div>
    );
};

export default SearchBar;
