import axios from 'axios'


export const getTrips = () => async (dispatch) => {
	const res = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureX/kelson/trips`)
	dispatch({type: "GET_TRIPS",
			payload: {"trips": res.data.trips}
			})
}


export const getTripDetails = id => async (dispatch) => {

	const res = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureX/kelson/trip/${id}`)
	dispatch({type: "GET_TRIP_DETAILS",
			payload: {"tripDetails": res.data.trip}
			})
}

export const getId = id =>
	({type: "GET_ID",
	payload: {"id": id}
	})