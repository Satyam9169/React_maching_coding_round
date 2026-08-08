import React, { useState } from 'react';
import useFetch from './useFetch';


export default function AutoCompleteSearch() {
    const [text, setText] = useState('');
    const [showResults, setShowResults] = useState(false);

    const WEB_API = text.trim()
        ? `https://dummyjson.com/products/search?q=${encodeURIComponent(
            text.trim()
        )}`
        : '';

    const { value, loading, error } = useFetch(WEB_API);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div className="app">
            <h2>Autocomplete Search</h2>

            <div className="search-container">
                <input
                    type="text"
                    value={text}
                    onChange={handleChange}
                    placeholder="Search products..."
                    onFocus={() => setShowResults(true)}
                />

                {showResults && text.trim() && (
                    <div className="results">
                        {loading && <p>Loading...</p>}

                        {error && <p>{error}</p>}

                        {!loading && !error && value.length === 0 && (
                            <p>No results found</p>
                        )}

                        {!loading &&
                            value.map((item) => (
                                <div
                                    key={item.id}
                                    className="result-item"
                                    onMouseDown={() => {
                                        setText(item.title);
                                        setShowResults(false);
                                    }}
                                >
                                    <strong>{item.title}</strong>
                                    <p>{item.description}</p>
                                </div>
                            ))}
                    </div>
                )}
            </div>
        </div>
    );
}
