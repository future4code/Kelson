import axios from 'axios'
import { routes } from '../containers/Router'
import { push } from "connected-react-router";


export const getTrips = () => async (dispatch) => {
	const res = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureX/kelson/trips`)
	dispatch({type: "GET_TRIPS",
			payload: {"trips": res.data.trips}
			})
}


export const getTripDetails = id => async (dispatch) => {
	const token = window.localStorage.getItem("token")
	const res = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureX/kelson/trip/${id}`, {headers: {auth:token}})
	dispatch({type: "GET_TRIP_DETAILS",
			payload: {"tripDetails": res.data.trip}
			})
}

export const getId = id =>
	({type: "GET_ID",
	payload: {"id": id}
	})

export const createTrip = form => async (dispatch) => {
	const token = window.localStorage.getItem("token")
	await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/futureX/kelson/trips`, form, {headers: {auth:token}})
}

export const applyTrip = (form, id) => async (dispatch) => {
	await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/futureX/kelson/trips/${id}/apply`, form)
}

export const login = (email, password) => async (dispatch) => {
	const header = {
		email,
		password,
	}
	const res = await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/futureX/kelson/login`, header)

	window.localStorage.setItem("token", res.data.token)
	dispatch(push(routes.adm))
}

export const decideCandidate = (form, id, candidateId) => async (dispatch) => {
	const token = window.localStorage.getItem("token")
	await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/futureX/kelson/trips/${id}/candidates/${candidateId}/decide`, form, {headers: {auth:token}})
}