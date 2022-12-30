import React, {FC, ReactElement, useReducer} from 'react';
import fetch from 'cross-fetch';
import {render} from '@testing-library/react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Provider as PaperProvider} from 'react-native-paper';
import {NativeRouter} from 'react-router-native';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client';
import {AppContext, mainReducer, initialState} from '../src/contexts/main';

const queryClient = new QueryClient();
const apolloClient = new ApolloClient({
  uri: 'http://FIXME:3000/graphql',
  cache: new InMemoryCache(),
  link: new HttpLink({uri: '/graphql', fetch}),
});

const AllTheProviders: FC<{children: React.ReactNode}> = ({children}) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <PaperProvider>
      <ApolloProvider client={apolloClient}>
        <AppContext.Provider value={{state, dispatch}}>
          <NativeRouter>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </NativeRouter>
        </AppContext.Provider>
      </ApolloProvider>
    </PaperProvider>
  );
};

const customRender = async (ui: ReactElement, options?: any) =>
  render(ui, {wrapper: AllTheProviders, ...options});

export * from '@testing-library/react-native';
export {customRender as render};
