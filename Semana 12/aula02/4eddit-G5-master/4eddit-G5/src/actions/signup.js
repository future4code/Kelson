import axios from "axios"
import { push } from "connected-react-router";
import { routes } from "../containers/Router";
import { changeSnackbar } from './snackbar';

export const requestSignUp = (data) => async (dispatch) => {
   
    try{
        await axios.post(
        "https://us-central1-missao-newton.cloudfunctions.net/fourEddit/signup",
        data)
        
        window.localStorage.setItem('token', res.data.token);
        console.log("12")
        window.localStorage.setItem('username', res.data.name);
        dispatch(push(routes.feed))
        const message = "Successfully SingUp and Login"
        dispatch(changeSnackbar(message, "success"))
    }
    catch(err) {
        const message = "Error when SignUp"
        dispatch(changeSnackbar(message, "error"))
    }
}