import React, { useState } from 'react';
import tarot from './tarotData.json';
import Header from './components/Header';
import Filters from './components/Filters';
import TarotTable from './components/Table';
import './App.css';

function App() {
  const cards = tarot.cards;

  const [filters, setFilters] = useState({
    name: '',
    arcana: 'All',
    suit: 'All',
    keyword: '',
    meaning: '',
    number: ''
  });

  const filteredCards = cards.filter(card => {
    const cardNumber = card.number !== undefined ? card.number : card.value;

    const matchName = card.name.toLowerCase().includes(filters.name.toLowerCase());
    const matchArcana = filters.arcana === 'All' || card.arcana === filters.arcana;
    const matchSuit = filters.suit === 'All' || (card.suit && card.suit === filters.suit);
    const matchKeyword = filters.keyword === '' ||
      (card.keywords && card.keywords.some(k => k.toLowerCase().includes(filters.keyword.toLowerCase())));
    const matchMeaning = filters.meaning === '' ||
      (card.meanings.standard && card.meanings.standard.toLowerCase().includes(filters.meaning.toLowerCase()));
    const matchNumber = 
      filters.number === '' || String(cardNumber) === String(filters.number);

    return matchName && matchArcana && matchSuit && matchKeyword && matchMeaning && matchNumber;
  });

  return (
    <div className="App">
      <Header />
      <Filters filters={filters} setFilters={setFilters} />
      <TarotTable cards={filteredCards} />
    </div>
  );
}

export default App;