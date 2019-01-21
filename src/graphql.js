import {gql} from 'apollo-boost';

export const SEARCH_REPOSITORIES = gql`query searchRepositories($first:Int, $last:Int, $before:String, $after:String, $query:String!) {
    search(first:$first, last:$last, before:$before, after:$after, query:$query, type:REPOSITORY) {
      repositoryCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          ... on Repository {
            id
            name
            url
            stargazers {
              totalCount
            }
            viewerHasStarred
          }
        }
      }
    }
  }
`;

export const ADD_STAR = gql`
mutation addStar($input: AddStarInput!) {
  addStar(input: $input) {
    starrable{
      id
      viewerHasStarred
    }
  }
}
`;

export const REMOVE_STAR = gql`
  mutation removeStar($input: RemoveStarInput!) {
	removeStar(input: $input) {
    starrable {
      id
      viewerHasStarred
    }
	}
}
`;

export const ME = gql`
  query me {
    user(login: "kt-sygo0921") {
      name
      avatarUrl
    }
  }
`;
