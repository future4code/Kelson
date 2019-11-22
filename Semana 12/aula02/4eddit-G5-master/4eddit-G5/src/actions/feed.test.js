// import axios from 'axios'
// import { routes } from '../containers/Router'
// import { push } from "connected-react-router";
// import { getPostById } from './detailedPost';
// import { changeSnackbar } from './snackbar';
// import snackbar from '../containers/snackbar';

// export const createPost = (title, text) => async (dispatch) => {
//     const token = window.localStorage.getItem("token")
//     const data = {
//         title,
//         text
//     }
//     const res = await axios.post(
//         `https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts`,
//         data, 
//         { headers: { auth: token } }
//     ).then((res) => {
//         dispatch(getPosts())
//         const message = "New post created susccessfully"
//         dispatch(changeSnackbar(message, "success"))
//     }).catch((err) => {
//         const message = "An error has occured. Please, try again."
//         dispatch(changeSnackbar(message, "error"))
//     })
    
// }

// export const getPosts = snackbar => async (dispatch) => {
//     const token = window.localStorage.getItem("token")
//     const res = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts`, { headers: { auth: token } 
//     }).then((res) => {
//          dispatch({type: "GET_POSTS",
//               payload:{posts: res.data.posts}
//             })
//         }).then((res) => {
    
//         if (snackbar === true) 
//             {const message = "Successfully Vote"
//             dispatch(changeSnackbar(message, "success"))
//         }
        
//     }).catch((err) => {
//         if (snackbar === true) 
//             {const message = "Error when Vote"
//             dispatch(changeSnackbar(message, "error"))
//         }
//         else{
//             const message = "Error when Get Posts"
//             dispatch(changeSnackbar(message, "error"))
//         }
//     })
// }

// export const vote = (value, id) => async (dispatch) => {
//     const token = window.localStorage.getItem("token")
//     const data = {
//         direction: value,
//     }
//     const res = await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${id}/vote`, data, { headers: { auth: token }
//     }).then((res) => {
//         dispatch(getPosts(true))
//         dispatch(getPostById(id, true))
//     })
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
