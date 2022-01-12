import { gql } from "@apollo/client";
import { clientUser } from "../apollo-client";

export async function shoppingadd(user_id:any, pokemon_id:any, token:any) {
    const data = await clientUser.mutate({
      mutation: gql
        `mutation AddMyPokemons($user_id:Long!,$pokemon_id:Long!){
          createUserPokemon(
            input:{
              data:{
                user_id:$user_id
                pokemon_id:$pokemon_id
              }
            }
          ){
            userPokemon{
              user_id
            }
          }
        }`,
      variables: { user_id, pokemon_id },
      context: {
        headers: {
          Authorization: `Bearer ${token}`
        }
      },
    })
    return data
}

export async function shopping(user_id:any, pokemon_id:any, token:any) {
  const { data } = await clientUser.query({
    query: gql
      `query IsMay($pokemon_id:Long!,$user_id:Long!){
        userPokemons(where:{pokemon_id:$pokemon_id,user_id:$user_id},limit:1){
          id
        }
      }`,
    variables: { user_id, pokemon_id },
    context: {
      headers: {
        Authorization: `Bearer ${token}`
      }
    },
    fetchPolicy: "no-cache"
  })
  return data.userPokemons
}

export async function shoppingList(user_id:any, token:any) {
  const { data } = await clientUser.query({
    query: gql
      `query MyPokemons($user_id:Long!){
        userPokemons(where:{user_id:$user_id}){
          id
          pokemon_id
        }
      }`,
    variables: { user_id },
    context: {
      headers: {
        Authorization: `Bearer ${token}`
      }
    },
    fetchPolicy: "no-cache"
  })
  return data.userPokemons
}