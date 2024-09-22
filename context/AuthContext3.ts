import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextType {
  name: string;
  storeName: (name: string) => void;
}

// Export the context
export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [name, setName] = useState<string>(sessionStorage.getItem('name') || '');

  const storeName = (name: string) => {
    setName(name);
    sessionStorage.setItem('name', name);
  };

  return (
    // <AuthContext.Provider value={{ name, storeName }}> 
      // {children}
    // </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};