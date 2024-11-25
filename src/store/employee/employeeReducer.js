import { GET_EMPLOYEES, SAVE_EMPLOYEE, UPDATE_EMPLOYEE} from './employeeAction'

const initialState = {
    employees : []
}

const employeeReducer = (state= initialState, action = undefined) => {
    console.log("llegando reducer")
    console.log(action)
    console.log(action)
    switch (action.type) {
        case GET_EMPLOYEES:
            return {...state, employees:action.value}
        
        case SAVE_EMPLOYEE:
            return {...state, employees:state.employees.concat({...action.value})}
        
        case UPDATE_EMPLOYEE:
            {
                const indice = state.employees.findIndex((elemento, indice) => {
                    if (elemento.id === action.value.id) {
                        return true;
                    }
                });

                const newArray = [...state.employees];
                newArray[indice] = action.value

                return { ...state,  employees: newArray }

            };
        
            default:
                return state;
    }
}

export default employeeReducer;

