import React from 'react';

const Table = ({ cards }) => (
    <table>
        <thead>
            <tr>
                <th>CARD</th>
                <th>NUMBER</th>
                <th>ARCANA</th>
                <th>SUIT</th>
                <th>STANDARD MEANING</th>
                <th>REVERSED MEANING</th>
                <th>KEYWORDS</th>
            </tr>
        </thead>
        <tbody>
            {cards.map(card => (
                <tr key={card.id}>
                    <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', height: '100%' }}>
                            {card.img ? (
                                <div className="image-container">
                                    <img src={`${process.env.PUBLIC_URL}/images/${card.img}`} alt={card.name} />
                                </div>
                            ) : (
                                <div style={{ width: 40, height: 60, backgroundColor: '#000', borderRadius: 24, flexShrink: 0 }} />
                            )}
                            <span>{card.name}</span>
                        </div>
                    </td>
                    <td>{card.number !== undefined ? card.number : card.value || '-'}</td>
                    <td>{card.arcana}</td>
                    <td>{card.suit || '-'}</td>
                    <td>{card.meanings.standard}</td>
                    <td>{card.meanings.reversed}</td>
                    <td>{card.keywords?.join(', ')}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default Table;