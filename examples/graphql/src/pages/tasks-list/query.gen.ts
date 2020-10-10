import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type GetTodosListQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetTodosListQuery = { readonly todos: Types.Maybe<{ readonly data: Types.Maybe<ReadonlyArray<Types.Maybe<{ readonly id: Types.Maybe<string>, readonly title: Types.Maybe<string>, readonly user: Types.Maybe<{ readonly name: Types.Maybe<string> }> }>>> }> };


export const GetTodosListDocument = gql`
    query getTodosList {
  todos {
    data {
      id
      title
      user {
        name
      }
    }
  }
}
    `;

/**
 * __useGetTodosListQuery__
 *
 * To run a query within a React component, call `useGetTodosListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodosListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodosListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTodosListQuery(baseOptions?: Apollo.QueryHookOptions<GetTodosListQuery, GetTodosListQueryVariables>) {
        return Apollo.useQuery<GetTodosListQuery, GetTodosListQueryVariables>(GetTodosListDocument, baseOptions);
      }
export function useGetTodosListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodosListQuery, GetTodosListQueryVariables>) {
          return Apollo.useLazyQuery<GetTodosListQuery, GetTodosListQueryVariables>(GetTodosListDocument, baseOptions);
        }
export type GetTodosListQueryHookResult = ReturnType<typeof useGetTodosListQuery>;
export type GetTodosListLazyQueryHookResult = ReturnType<typeof useGetTodosListLazyQuery>;
export type GetTodosListQueryResult = Apollo.QueryResult<GetTodosListQuery, GetTodosListQueryVariables>;