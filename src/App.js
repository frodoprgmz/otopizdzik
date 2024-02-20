import React from 'react';

const App = () => {
  const [ogloszenia, setOgloszenia] = React.useState([]);

  React.useEffect(() => {
    // Sprawdź, czy istnieją zapisane ogłoszenia w plikach cookies
    const savedOgloszenia = localStorage.getItem('ogloszenia');
    if (savedOgloszenia) {
      setOgloszenia(JSON.parse(savedOgloszenia));
    }
  }, []);

  const dodajOgloszenie = (noweOgloszenie) => {
    // Dodaj nowe ogłoszenie do listy
    const updatedOgloszenia = [...ogloszenia, noweOgloszenie];
    setOgloszenia(updatedOgloszenia);

    // Zapisz ogłoszenia w plikach cookies
    localStorage.setItem('ogloszenia', JSON.stringify(updatedOgloszenia));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const zdjecie = event.target.result;
      dodajOgloszenie({ zdjecie });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <h1>Portal Ogłoszeń z Samochodami</h1>
      <ListaOgloszen ogloszenia={ogloszenia} />
      <FormularzDodawaniaOgloszenia
        dodajOgloszenie={dodajOgloszenie}
        handleFileChange={handleFileChange}
      />
    </div>
  );
};

const Ogloszenie = ({ marka, model, rokProdukcji, cena, zdjecie }) => {
  return (
    <div>
      <h2>{marka} {model}</h2>
      <p>Rok produkcji: {rokProdukcji}</p>
      <p>Cena: {cena} zł</p>
      <img src={zdjecie} alt="Zdjęcie samochodu" />
    </div>
  );
};

const ListaOgloszen = ({ ogloszenia }) => {
  return (
    <div>
      <h3>Lista Ogłoszeń</h3>
      {ogloszenia.map((ogloszenie, index) => (
        <Ogloszenie
          key={index}
          marka={ogloszenie.marka}
          model={ogloszenie.model}
          rokProdukcji={ogloszenie.rokProdukcji}
          cena={ogloszenie.cena}
          zdjecie={ogloszenie.zdjecie}
        />
      ))}
    </div>
  );
};

const FormularzDodawaniaOgloszenia = ({ dodajOgloszenie, handleFileChange }) => {
  const [marka, setMarka] = React.useState('');
  const [model, setModel] = React.useState('');
  const [rokProdukcji, setRokProdukcji] = React.useState('');
  const [cena, setCena] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Tworzenie nowego ogłoszenia
    const noweOgloszenie = {
      marka: marka,
      model: model,
      rokProdukcji: rokProdukcji,
      cena: cena,
    };

    // Dodawanie ogłoszenia
    dodajOgloszenie(noweOgloszenie);

    // Resetowanie formularza
    setMarka('');
    setModel('');
    setRokProdukcji('');
    setCena('');
  };

  return (
    <div>
      <h3>Dodaj Ogłoszenie</h3>
      <form onSubmit={handleSubmit}>
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
        <input
          type="file"
          onChange={handleFileChange}
        />
        <button type="submit">Dodaj Ogłoszenie</button>
      </form>
    </div>
  );
};

export default App;
