import {gql} from 'apollo-boost';

export const ME = gql`
  query me {
    user(login: "kt-sygo0921") {
      name
      avatarUrl
    }
  }
`;
