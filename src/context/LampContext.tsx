import { createContext, useContext, useState, ReactNode } from 'react';

interface LampContextType {
  color: string;
  changeColor: (newColor: string) => void;
}

const defaultState: LampContextType = {
  color: '#000000',
  changeColor: () => {}
};

const LampContext = createContext<LampContextType>(defaultState);

interface ProviderProps {
  children: ReactNode;
}

export const useLamp = (): LampContextType => useContext(LampContext);

export function LampProvider({ children }: ProviderProps) {
  const [color, setColor] = useState<string>(defaultState.color);

  const changeColor = (newColor: string) => setColor(newColor);

  return (
    <LampContext.Provider value={{ color, changeColor }}>
      {children}
    </LampContext.Provider>
  );
}
