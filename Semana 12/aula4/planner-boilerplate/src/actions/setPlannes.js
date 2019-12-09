import axios from "axios"

export const getPlannes = () => async dispatch => {
    const res = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/generic/planner-kelson')
    if (res.status === 200)
        dispatch(setPlannes(res.data))
}

export const setPlannes = (plannes=[]) =>{
    const days = {
          domingo: [],
          segunda: [],
          terça: [],
          quarta: [],
          quinta: [],
          sexta: [],
          sabado: [],
    } 
    console.log(plannes)

    const daysWithPlan = {}
    for (var [key, value] of Object.entries(days)) {
        
        daysWithPlan[key] = plannes.filter( task => (task.day === key))
    }
  
    
    return({
    type:"SET_PLANNES",
    payload: daysWithPlan
    })
}