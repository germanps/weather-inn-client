import { gql } from '@apollo/client';

export const USERSEARCH = gql`
    mutation userSearch($input: UserSearchInput){
        userSearch(input: $input){
            idUser
            label
            codprov
            idpob
        }
    }
`;
