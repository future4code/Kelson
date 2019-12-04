const initialState = {matches: '',
                      profileToSwipe: ''}

const profiles = (state = initialState, action) => {
  console.log(action)
  switch (action.type){
    case "GET_PROFILE":
      return {...state, profileToSwipe: action.payload.profile}
    case "GET_MATCHES":
      return {...state, matches: action.payload.matches}
    default:
      return state
    }

}

export default profiles
