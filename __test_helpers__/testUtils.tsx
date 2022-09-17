import React, {FC, ReactElement, useReducer} from 'react';
import {render} from '@testing-library/react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Provider as PaperProvider} from 'react-native-paper';
import {NativeRouter} from 'react-router-native';

import {AppContext, mainReducer, initialState} from '../src/contexts/main';

const queryClient = new QueryClient();

const AllTheProviders: FC<{children: React.ReactNode}> = ({children}) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <PaperProvider>
      <AppContext.Provider value={{state, dispatch}}>
        <NativeRouter>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </NativeRouter>
      </AppContext.Provider>
    </PaperProvider>
  );
};

const customRender = (ui: ReactElement, options?: any) =>
  render(ui, {wrapper: AllTheProviders, ...options});

export * from '@testing-library/react-native';
export {customRender as render};
