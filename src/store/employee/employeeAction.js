
import {getEmployees, saveEmployee, updateEmployee} from '../../services/employee-service'

export const GET_EMPLOYEES = 'GET_EMPLOYEES';
export const GET_ERROR_EMPLOYEE = 'GET_ERROR_EMPLOYEE';
export const SAVE_EMPLOYEE = 'SAVE_EMPLOYEE';
export const SAVE_ERROR_EMPLOYEE = 'SAVE_ERROR_EMPLOYEE';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';
export const UPDATE_ERROR_EMPLOYEE = 'UPDATE_ERROR_EMPLOYEE';

export const getEmployeeAction = (method) => dispatch => {
    console.log("llegando a action")
    getEmployees(method)
        .then(response => {
            console.log("response data")
            console.log(response.data)
            dispatch({
                type: GET_EMPLOYEES,
                value: response.data
            });
        })
        .catch(error => {
            dispatch({
                type: GET_ERROR_EMPLOYEE,
                value: JSON.stringify(error)
            });
        })
}

export const saveEmployeeAction = (method, obj) => dispatch => {
    console.log("llegando a action save")
    saveEmployee(method, obj)
        .then(response => {
            console.log("response data")
            console.log(response.data)
            dispatch({
                type: SAVE_EMPLOYEE,
                value: response.data
            });
        })
        .catch(error => {
            dispatch({
                type: SAVE_ERROR_EMPLOYEE,
                value: JSON.stringify(error)
            });
        })
}


export const updateEmployeeAction = (method, obj) => dispatch => {
    console.log("llegando a action update")
    updateEmployee(method, obj)
        .then(response => {
            console.log("response data")
            console.log(response.data)
            dispatch({
                type: UPDATE_EMPLOYEE,
                value: response.data
            });
        })
        .catch(error => {
            dispatch({
                type: UPDATE_ERROR_EMPLOYEE,
                value: JSON.stringify(error)
            });
        })
}






