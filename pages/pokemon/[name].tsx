import { ApolloProvider } from '@apollo/client'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { clientPokemon } from '../../apollo-client'
import CardDetail from '../../components/CardDetail'

const Pokemon: NextPage = () => {
	const router = useRouter()
	const { name, image, price, quantity, id, stock_id } = router.query

	return (
		<ApolloProvider client={clientPokemon}>
			<CardDetail name={name} image={image} price={price} quantity={quantity} id={id} stock_id={stock_id}/>
		</ApolloProvider>
	)
}

export default Pokemon