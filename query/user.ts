import { gql } from "@apollo/client";
import { clientUser } from "../apollo-client";

export async function login(email: string, password: string) {
  const data = await clientUser.mutate({
    mutation: gql
      `mutation Login($email: String!,$password: String!){
        login(input: { identifier: $email, password: $password }) {
          jwt
          user {
            id
            username
            email
          }
        }
      }`,
    variables: { email, password }
  })
  return data
}

export async function register(fromData:any) {
  const data = await clientUser.mutate({
    mutation: gql
      `mutation Register($username:String!,$email:String!,$password:String!){
        register(input: { username: $username, email: $email, password: $password }) {
          jwt
          user {
            username
            email
          }
        }
      }`,
    variables: fromData,
    fetchPolicy: "no-cache"
  })
  return data
}