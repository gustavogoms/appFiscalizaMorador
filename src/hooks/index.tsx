import React, { useState, createContext, useContext } from 'react';

import { AuthProvider } from './Auth';

const AppContext = createContext({});

export const useAppState = () => useContext(AppContext);

const AppProvider: React.FC = ({children}) => {
    return (
      <AppContext.Provider value={useState({})}>
        <AuthProvider>
            {children}
        </AuthProvider>
    </AppContext.Provider>);
};

export default AppProvider;
