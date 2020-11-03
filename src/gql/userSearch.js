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

export const GETUSERSEARCH = gql`
    query getUserSearch($idUser: ID!) {
        getUserSearch(idUser: $idUser){
            idUser
            label
            codprov
            idpob
        }
    }
`;
