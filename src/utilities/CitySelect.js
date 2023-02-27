import { useEffect, useState, createContext } from 'react';
const getInitialCity = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('mit-city');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }
  }

  return 'Jaipur'; // Jaipur city as the default;
};

export const CityContext = createContext();

export const CityProvider = ({ initialCity, children }) => {
  const [city, setCity] = useState(getInitialCity);

  const rawSetCity = (rawCity) => {
    localStorage.setItem('mit-city', rawCity);
  };

  if (initialCity) {
    rawSetCity(initialCity);
  }

  useEffect(() => {
    rawSetCity(city);
  }, [city]);

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
};
