
import './App.css';

import React from 'react';

// Komponent Ogłoszenie
const Ogloszenie = ({ marka, model, rokProdukcji, cena }) => {
  return (
    <div>
      <h2>{marka} {model}</h2>
      <p>Rok produkcji: {rokProdukcji}</p>
      <p>Cena: {cena} zł</p>
    </div>
  );
};

// Komponent Lista Ogłoszeń
const ListaOgloszen = ({ ogloszenia }) => {
  return (
    <div>
      <h1>Lista Ogłoszeń</h1>
      {ogloszenia.map((ogloszenie, index) => (
        <Ogloszenie
          key={index}
          marka={ogloszenie.marka}
          model={ogloszenie.model}
          rokProdukcji={ogloszenie.rokProdukcji}
          cena={ogloszenie.cena}
        />
      ))}
    </div>
  );
};

// Komponent Formularz Dodawania Ogłoszenia
const FormularzDodawaniaOgloszenia = () => {
  const [marka, setMarka] = React.useState('');
  const [model, setModel] = React.useState('');
  const [rokProdukcji, setRokProdukcji] = React.useState('');
  const [cena, setCena] = React.useState('');

  const dodajOgloszenie = () => {
    // Logika dodawania ogłoszenia
  };

  return (
    <div>
      <h1>Formularz Dodawania Ogłoszenia</h1>
      <input
        type="text"
        placeholder="Marka"
        value={marka}
        onChange={(e) => setMarka(e.target.value)}
      />
      <input
        type="text"
        placeholder="Model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      />
      <input
        type="text"
        placeholder="Rok produkcji"
        value={rokProdukcji}
        onChange={(e) => setRokProdukcji(e.target.value)}
      />
      <input
        type="text"
        placeholder="Cena"
        value={cena}
        onChange={(e) => setCena(e.target.value)}
      />
      <button onClick={dodajOgloszenie}>Dodaj Ogłoszenie</button>
    </div>
  );
};

export default function App() {
  const ogloszenia = [
    { marka: 'BMW', model: 'X5', rokProdukcji: 2020, cena: 150000 },
    { marka: 'Audi', model: 'A4', rokProdukcji: 2018, cena: 100000 },
    { marka: 'Mercedes', model: 'C-Class', rokProdukcji: 2019, cena: 120000 },
  ];

  return (
    <div>
      <ListaOgloszen ogloszenia={ogloszenia} />
      <FormularzDodawaniaOgloszenia />
    </div>
  );
}
