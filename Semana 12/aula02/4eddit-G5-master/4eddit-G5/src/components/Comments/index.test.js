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

