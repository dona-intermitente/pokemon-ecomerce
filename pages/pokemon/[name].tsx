import { ApolloProvider } from '@apollo/client'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { clientPokemon } from '../../apollo-client'
import CardDetail from '../../components/CardDetail'

const Pokemon: NextPage = () => {
	const router = useRouter()
	const { name, image, price, quantity } = router.query

	return (
		<ApolloProvider client={clientPokemon}>
			<CardDetail name={name} image={image} price={price} quantity={quantity} />
		</ApolloProvider>
	)
}

export default Pokemon