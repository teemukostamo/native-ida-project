import {gql} from '@apollo/client';

export const AUTHORIZE = gql`
  mutation LoginUser($loginCredentials: LoginUserInput!) {
    loginUser(loginUserInput: $loginCredentials) {
      access_token
    }
  }
`;
