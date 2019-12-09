// import axios from 'axios'
// import { changeSnackbar } from './snackbar';

// export const getPostById = (id, snackbar) => async (dispatch) => {
// 	await axios.get(
// 		`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${id}`,
// 		{
// 			headers: {
// 				auth: window.localStorage.getItem('token')
// 			}
// 		}
//     ).then((res) => {
// 		dispatch(displayDetailedPost(res.data.post))
// 		}).then((res) => {
// 			if (snackbar === true) {
// 				const message = "Successfully Vote"
// 				dispatch(changeSnackbar(message, "success"))
// 			}

// 	}).catch((err) => {
// 		if (snackbar === true) {
// 			const message = "Error when Vote"
// 			dispatch(changeSnackbar(message, "error"))
// 		}
// 		else {
// 			const message = "Error when Get Commets"
// 			dispatch(changeSnackbar(message, "error"))
// 		}
// 	});
// }

// export const displayDetailedPost = (post) => ({
// 	type: "DISPLAY_DETAILED_POST",
// 	payload: {
// 		post,
// 	}
// });
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
