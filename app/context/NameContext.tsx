'use client'

import React, { createContext, useState, ReactNode } from 'react';

type NameContextType = {
  name: string;
  setName: (name: string) => void;
};

export const NameContext = createContext<NameContextType | undefined>(undefined);

export function NameProvider({ children }: { children: ReactNode }) {
  const [name, setName] = useState('');
  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
}