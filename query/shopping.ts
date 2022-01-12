import { gql } from "@apollo/client";
import { clientUser } from "../apollo-client";

export async function pokemonshoppin(user_id:any, pokemon_id:any) {
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
        variables: { user_id, pokemon_id }
    })
    return data
}