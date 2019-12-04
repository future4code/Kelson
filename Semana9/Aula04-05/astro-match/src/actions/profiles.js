import axios from 'axios'

export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kelson/clear')
	dispatch(getProfileToSwipe())
}

export const chooseProfile = (id, option) => async (dispatch) => {
	const data = {
		"id": id,
		"choice": option
	}
	await axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kelson/choose-person', data)
	dispatch(getProfileToSwipe())
}

export const getProfileToSwipe = () => async (dispatch) => {
	const res = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kelson/person')
	dispatch({type: "GET_PROFILE",
			payload: {"profile": res.data.profile}
			})
}

export const getMatches = () => async (dispatch) => {
	const res = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kelson/matches')
	dispatch({type: "GET_MATCHES",
			payload: {matches: res.data.matches}
			})
}
