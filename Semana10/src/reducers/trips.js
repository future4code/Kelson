const initialState = {trips: [],
                      tripDetails: {},
                      id: '',
                      }

const trips = (state = initialState, action) => {
  switch (action.type){
    case "GET_TRIPS":
      return {...state, trips: action.payload.trips}
    case "GET_TRIP_DETAILS":
      return {...state, tripDetails: action.payload.tripDetails}
    case "GET_ID":
      return {...state, id: action.payload.id}
    default:
      return state
    }

}

export default trips