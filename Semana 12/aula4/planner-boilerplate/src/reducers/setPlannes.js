const initialState = {
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

export const setPlannes = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PLANNES":
            return { ...state, plannes: action.payload.daysWithPlan };
        default:
            return state;
    }
};

