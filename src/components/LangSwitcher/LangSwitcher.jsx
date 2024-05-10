import { useState } from 'react';

const LangSwitcher = ({ value, onSelect }) => {
    const selectID = useState();

    return (
        <div>
            <label htmlFor={selectID}>Choose language</label>
            <select
                id={selectID}
                value={value}
                onChange={evt => onSelect(evt.target.value)}
            >
                <option value="en">English</option>
                <option value="ua">Ukrainian</option>
                <option value="pl">Polish</option>
            </select>
        </div>
    );
};

export default LangSwitcher;
