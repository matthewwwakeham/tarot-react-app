import React from 'react';

const Filters = ({ filters, setFilters }) => {
    const update = (field, value) => {
        setFilters(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="filters">
            <input
            type="text"
            placeholder="Search name..."
            value={filters.name}
            onChange={(e) => update('name', e.target.value)}
        />
        <select value={filters.arcana} onChange={(e) => update('arcana', e.target.value)}>
            <option value="All">All Arcana</option>
            <option value="Major Arcana">Major Arcana</option>
            <option value="Minor Arcana">Minor Arcana</option>
        </select>
        <select value={filters.suit} onChange={(e) => update('suit', e.target.value)}>
            <option value="All">All Suits</option>
            <option value="Wands">Wands</option>
            <option value="Swords">Swords</option>
            <option value="Cups">Cups</option>
            <option value="Pentacles">Pentacles</option>
        </select>
        <input
            type="text"
            placeholder="Keyword..."
            value={filters.keyword}
            onChange={(e) => update('keyword', e.target.value)}
        />
        <input
            type="text"
            placeholder="Meaning includes..."
            value={filters.meaning}
            onChange={(e) => update('meaning', e.target.value)}
            />
        <input 
            type="number"
            min="0"
            placeholder="Card number"
            value={filters.number}
            onChange={(e) => {
                const value = e.target.value;
                if (value === '' || (Number(value) >= 0 && Number(value) <= 22)) {
                    setFilters({...filters, number: value});
                }
            }}
        />
        </div>
    );
};

export default Filters;