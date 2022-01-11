import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Pokemon: NextPage = () => {
	const router = useRouter()
	const { namePokemon, image } = router.query
	console.log(namePokemon);

	return (
		<div>
			<h1>pokemon</h1>
			<p>Post: {namePokemon}</p>
		</div>
	)
}

export default Pokemon