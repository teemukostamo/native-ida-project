import {useMutation, useApolloClient} from '@apollo/client';
import {AUTHORIZE} from '../graphql/mutations';

import {CredentialsType} from '~src/types';

const useLogin = () => {
  const [mutate, result] = useMutation(AUTHORIZE);
  const apolloClient = useApolloClient();

  const login = async ({email, password}: CredentialsType) => {
    console.log('email at hook', email);
    const payload = await mutate({
      variables: {
        loginCredentials: {
          email,
          password,
        },
      },
    });
    console.log('payload', payload);
    const {data} = payload;

    if (data && data.authorize) {
      // FIXME - set token to secure storage
      apolloClient.resetStore();
    }

    return payload;
  };

  return {
    result,
    login,
  };
};

export default useLogin;
