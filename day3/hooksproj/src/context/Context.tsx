import React, { createContext, useReducer, ReactNode } from 'react';
import { reducer, initialState, State } from './reducer';

interface GlobalStateContextProps {
  state: State;
  dispatch: React.Dispatch<any>;
}

export const GlobalStateContext = createContext<GlobalStateContextProps | undefined>(undefined);

interface GlobalStateProviderProps {
  children: ReactNode;
}

export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
