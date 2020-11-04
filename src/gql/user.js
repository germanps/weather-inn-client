import { gql } from '@apollo/client';

export const REGISTER = gql`
    mutation register($input: UserInput) {
        register(input: $input){
            id
            name
            password
            email
            createAt
        }
    }
`;

export const LOGIN = gql`
    mutation login($input: LoginInput) {
        login(input: $input){
            token
        }
    }
`;

export const UPDATE_USER = gql`
    mutation updateUser($input: UserUpdateInput) {
        updateUser(input: $input)
    }
`;