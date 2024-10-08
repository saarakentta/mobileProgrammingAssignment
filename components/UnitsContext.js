import { createContext, useState } from 'react';

const UnitsContext = createContext();

export function UnitsProvider({ children }) {
  const [unit, setUnit] = useState('km');

  return (
    <UnitsContext.Provider value={{ unit, setUnit }}>
      {children}
    </UnitsContext.Provider>
  );
}

export default UnitsContext;