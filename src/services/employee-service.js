import axios from "axios"
import { HOST, HOST_EMPLOYEE } from "../constants"

export const getEmployees =  (method) =>{
    const url = HOST.URL + HOST_EMPLOYEE.GET
    return axios({method:method, url:url})
}

export const saveEmployee =  (method, obj) =>{
    const url = HOST.URL + HOST_EMPLOYEE.POST
    return axios({method:method, url:url, data:obj})
}

export const updateEmployee =  (method, obj) =>{
    const url = HOST.URL + HOST_EMPLOYEE.PUT
    return axios({method:method, url:url, data:obj})
}