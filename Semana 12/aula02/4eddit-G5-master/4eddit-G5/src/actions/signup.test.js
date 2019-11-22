
// export const requestSignUp = (data) => async (dispatch) => {
//     await Axios.post(
//         "https://us-central1-missao-newton.cloudfunctions.net/fourEddit/signup",
//         data
//     ).then((res) => {
//         window.localStorage.setItem('token', res.data.token);
//         window.localStorage.setItem('username', res.data.name);
//         dispatch(push(routes.feed))
//         const message = "Successfully SingUp and Login"
//         dispatch(changeSnackbar(message, "success"))
//     }).catch((err) => {
//         const message = "Error when SignUp"
//         dispatch(changeSnackbar(message, "error"))
//     })
// }

import axios from "axios"
import { requestSignUp } from "./signup";

jest.mock("axios")



describe("SignUp Actions", () => {
    test("requestSignUp", async ()  => {
        const mockdata = {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlphR1dLRWRjZXlaWjlORkxPUGgxIiwiZW1haWwiOiJwZWRyby5kYXJ2YXNAZ21haWwuY29tIiwidXNlcm5hbWUiOiJkYXJ2YXMiLCJpYXQiOjE1NzM1Nzk5MTd9.sKiIIRgiQm2qesnrNmFujNlXF02ytx-IvLKnNFHqXg",
            "user": {
                "id": "ZaGWKEdceyZZ9NFLOPh1",
                "email": "pedro.darvas@gmail.com",
                "username": "darvas"
            }
        }
        localStorage.setItem = jest.fn()

        // Object.defineProperty((window.localStorage), 'setItem', setItem);

        
        axios.post.mockResolvedValue(mockdata)
        axios.post = jest.fn()
        const dispatch = jest.fn()
        
        await requestSignUp()(dispatch)
        expect(axios.post).toHaveBeenCalledTimes(1)
        expect(dispatch).toHaveBeenCalledTimes(2)
        
    })
})
