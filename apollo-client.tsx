import { ApolloClient, InMemoryCache } from "@apollo/client";

const clientPokemon = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_POKEMON_API,
    cache: new InMemoryCache(),
})

const clientUser = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_USER_API}/graphql`,
    cache: new InMemoryCache(),
})

export { clientPokemon, clientUser }