import React, { useState } from 'react';
import {Configuration, Pet, PetApi} from './data/api/generated';
import PetDetailsComponent from "./PetDetailsComponent";

export default function App() {
  const [response, setResponse] = useState<Pet>();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // setup Api
  const config = new Configuration({
        basePath: 'http://localhost:3003/api/v3',
    });
  const api = new PetApi(config);

  const handleButtonClick = async () => {
    setLoading(true);
    try {
      const res = await api.getPetById(1);
      const data = res.data;
      setError('');
      setResponse(data);
    } catch (error) {
      setError('Error fetching data');
    }
    setLoading(false);
  };

  return (
      <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
        <button onClick={handleButtonClick} disabled={loading}>
          {loading ? 'Loading...' : 'Call API'}
        </button>
        <div style={{ marginTop: '1rem' }}>
            {response && <PetDetailsComponent pet={response} />}
        </div>
        <div style={{ marginTop: '1rem', color: "red" }}>{error}</div>
      </div>
  );
}