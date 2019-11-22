import axios from "axios"
import { getPlannes } from "./setPlannes"

export const dispatchCreate = data => async dispatch => {
    const res = await axios.post('https://us-central1-missao-newton.cloudfunctions.net/generic/planner-kelson', data)
    
    if(res.status === 200)
        dispatch(getPlannes())
}