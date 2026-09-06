import React, { useState, useEffect, useCallback } from 'react';
import './style.css';

export default function Autocomplete() {
    const [input, setInput] = useState('');
    const [value, setValue] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [cache, setCache] = useState({});

    const fetchData = useCallback(async () => {
        const query = input.trim();

        if (!query) {
            setValue([]);
            return;
        }

        // Return cached data
        if (cache[query]) {
            console.log('✅ CACHE HIT:', query);
            setValue(cache[query]);
            return;
        }

        try {
            console.log('🌐 API CALL:', query);

            const response = await fetch(
                `https://dummyjson.com/recipes/search?q=${query}`
            );

            const result = await response.json();

            setValue(result.recipes || []);

            setCache((prev) => ({
                ...prev,
                [query]: result.recipes || [],
            }));
        } catch (err) {
            console.error(err);
        }
    }, [input, cache]);

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchData();
        }, 300);

        return () => clearTimeout(timer);
    }, [fetchData]);

    const handleSearch = (e) => {
        setInput(e.target.value);
    };

    return (
        <div>
            <h2>Autocomplete Search</h2>

            <input
                type="text"
                value={input}
                onChange={handleSearch}
                placeholder="Search recipes..."
                onFocus={() => setShowResult(true)}
                onBlur={() => setTimeout(() => setShowResult(false), 200)}
            />

            {showResult && value.length > 0 && (
                <ul>
                    {value.map((recipe) => (
                        <li key={recipe.id}>{recipe.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}
