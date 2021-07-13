import { Client, query } from 'faunadb'

const client = new Client({ secret: process.env.REACT_APP_FAUNADB })

const {
	Collection,
	Create,
	Index,
	Map: FMap,
	Get,
	Lambda,
	Match,
	Paginate,
	Var,
} = query

export const createPlayer = async data => {
	return await client.query(Create(Collection('playerScores'), { data }))
}

export const getPlayers = async () => {
	const { data } = await client.query(
		FMap(
			Paginate(Match(Index('allPlayerScores'))),
			Lambda('ref', Get(Var('ref')))
		)
	)

	return data.map(player => ({ ...player.data, id: player.ref.id }))
}
