import axios from "axios"
import { getPlannes, setPlannes } from "./setPlannes"


describe("getPlannes", () => {
    test("Retorno positivo da Api", async () => {
        axios.get = jest.fn(() => ({ status: 200 }))
        const dispatch = jest.fn()

        await getPlannes()(dispatch)

        expect(axios.get).toHaveBeenCalledTimes(1)
        expect(dispatch).toHaveBeenCalledTimes(1)
    })
    test("Retorno negativo da Api", async () => {
        axios.get = jest.fn(() => ({ status: 400 }))
        const dispatch = jest.fn()

        await getPlannes()(dispatch)

        expect(axios.get).toHaveBeenCalledTimes(1)
        expect(dispatch).toHaveBeenCalledTimes(0)
    })
})

describe("getPlannes", () => {
    test("Retorno positivo da Api", async () => {
        axios.get = jest.fn(() => ({ status: 200 }))
        const dispatch = jest.fn()

        await getPlannes()(dispatch)

        expect(axios.get).toHaveBeenCalledTimes(1)
        expect(dispatch).toHaveBeenCalledTimes(1)
    })
    test("Retorno negativo da Api", async () => {
        axios.get = jest.fn(() => ({ status: 400 }))
        const dispatch = jest.fn()

        await getPlannes()(dispatch)

        expect(axios.get).toHaveBeenCalledTimes(1)
        expect(dispatch).toHaveBeenCalledTimes(0)
    })
})

describe("setPlannes", () => {
    test("Teste do filtro", async () => {
        const mockplannes = [
            {
                day: "sabado",
                text: "Oi"},
            {
                day: "sabado",
                text: "Hi"
            },
            {
                day: "terça",
                text: "Festa"
            },
            {
                day: "quinta",
                text: "Festival"
            },

        ]
        const mockExpect = {
            type: "SET_PLANNES",
            payload: {
                domingo: [],
                segunda: [],
                terça: [
                    {
                        day: "terça",
                        text: "Festa"
                },],
                quarta: [],
                quinta: [
                    {
                        day: "quinta",
                        text: "Festival"
                },],
                sexta: [],
                sabado: [
                    {
                        day: "sabado",
                        text: "Oi"
                    },
                    {
                        day: "sabado",
                        text: "Hi"
                    }],
        }}

        
        const result = setPlannes(mockplannes)
        expect(result).toStrictEqual(mockExpect)
    })
})