
import {setPlannes} from "./setPlannes"




describe("setPlannes", () => {
    test("retorn SET_PLANNES", async () => {
        const mockData = {
            type: "SET_PLANNES",
            payload: {
                daysWithPlan :{
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
                }
            }
        }
        const resexpect ={
            plannes:{
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
            }
        }

        const res = setPlannes(null, mockData)
        expect(res).toStrictEqual(resexpect)
    })
    test("retorn != SET_PLANNES", async () => {
        const mockData = {
            type: "DIF",
        }
        const resexpect = {
            plannes: {
                domingo: [],
                segunda: [],
                terça: [],
                quarta: [],
                quinta: [],
                sexta: [],
                sabado: [],
            }
        }

        const state = {
            plannes: {
                domingo: [],
                segunda: [],
                terça: [],
                quarta: [],
                quinta: [],
                sexta: [],
                sabado: [],
            }
        }

        const res = setPlannes(state, mockData)
        expect(res).toStrictEqual(resexpect)
    })
})