// import axios from 'axios'
// import { routes } from '../containers/Router'
// import { push } from "connected-react-router";
// import { changeSnackbar } from './snackbar';

// export const login = (email, password) => async (dispatch) => {
//     const data = {
//         email,
//         password,
//     }
//     try{ const res = await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/login`, data)

//         window.localStorage.setItem("token", res.data.token)
//         dispatch(push(routes.feed)) 
//         const message = "Successfully Login"
//         dispatch(changeSnackbar(message, "success"))
//     }
//     catch(err){
//         const message = "Error when logging"
//         dispatch(changeSnackbar(message, "error"))
//     }
// }
import { changeSnackbar, closeSnackbar } from "./snackbar"


describe("Snackbar Actions", () => {
    test("changeSnarckbar", () => {
        const expectedResult = {
            type: "CHANGE_SNACKBAR",
            payload: {
                message: "test1",
                state: false
            }
        }
        const result = changeSnackbar("test1", false)
        expect(expectedResult).toMatchObject(result)
    })
    test("closeSnackbar", () => {
        const expectedResult = {
            type: "CLOSE_SNACKBAR",
        }

        const result = closeSnackbar()
        expect(expectedResult).toMatchObject(result)
    })
})
