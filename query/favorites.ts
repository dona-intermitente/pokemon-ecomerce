import { gql } from "@apollo/client";
import { clientUser } from "../apollo-client";

export async function favoriteList(user_id:any, token:any) {
  if (!token || !user_id) return []
  const { data } = await clientUser.query({
    query: gql
      `query Favorites($user_id:ID!){
        userPokemonsFavorites(where:{user_id:$user_id}){
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
  return data.userPokemonsFavorites
}

export async function favoriteAdd(user_id:any, pokemon_id:any, token:any) {
  const data = await clientUser.mutate({
    mutation: gql
      `mutation AddFavorite($user_id:Long!,$pokemon_id:Long!){
        createUserPokemonsFavorite(
          input:{
            data:{
              user_id:$user_id
              pokemon_id:$pokemon_id
            }
          }
        ){
          userPokemonsFavorite{
            user_id
            pokemon_id
          }
        }
      }`,
    variables: { user_id, pokemon_id },
    context: {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  })
  return data
}

export async function favoriteRemove(favorite_id:any, token:any) {
  const data = await clientUser.mutate({
    mutation: gql
      `mutation AddFavorite($id:ID!){
        deleteUserPokemonsFavorite(
          input:{
            where:{id:$id}
          }
        ){
          userPokemonsFavorite{
            user_id
            pokemon_id
          }
        }
      }`,
    variables: { id: favorite_id },
    context: {
      headers: {
        Authorization: `Bearer ${token}`
      }
    },
  })
  return data 
}