import axios from "axios"
import { dispatchCreate } from "./createNewPlan"


describe( "dispatchCreate", ()=>{
    test("Retorno positivo da Api", async () => {
    axios.post = jest.fn(()=> ({status: 200}))
    const dispatch = jest.fn()

    await dispatchCreate()(dispatch)
    
    expect(axios.post).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledTimes(1)
    })
    test("Retorno negativo da Api", async () => {
        axios.post = jest.fn(() => ({ status: 400 }))
        const dispatch = jest.fn()

        await dispatchCreate()(dispatch)

        expect(axios.post).toHaveBeenCalledTimes(1)
        expect(dispatch).toHaveBeenCalledTimes(0)
    })
})