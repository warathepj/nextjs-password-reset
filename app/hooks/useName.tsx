
// app/hooks/useName.ts
'use client'

import { useContext } from 'react';
import { NameContext } from '../context/NameContext';

export function useName() {
  const context = useContext(NameContext);
  if (context === undefined) {
    throw new Error('useName must be used within a NameProvider');
  }
  return context;
}
