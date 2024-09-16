// Suggested code may be subject to a license. Learn more: ~LicenseLog:2436387524.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3206298182.
// context/AuthContext.tsx
import { createContext, useState, useContext } from 'react';

interface AuthContextType {
  name: string;
  storeName: (name: string) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC = ({ children }) => {
  const [name, setName] = useState<string>(sessionStorage.getItem('name') || '');

  const storeName = (name: string) => {
    setName(name);
    sessionStorage.setItem('name', name
);
  };

  return (
    <AuthContext.Provider value={{ name, storeName }}> {/* Corrected line */}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
