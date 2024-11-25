import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeeAction, saveEmployeeAction, updateEmployeeAction } from "../store/employee/employeeAction";
import Input from "../commons/components-form/Input";
import Select from "../commons/components-form/Select";
import useForm from "../hooks/useForm"
import cities from "../data/locations";
import positions from "../data/positions";

const Employee = () => {

    const dispatch = useDispatch();
    const state = useSelector(x => x.employeeReducer)
    const employees = useSelector(state => state.employeeReducer.employees)

    const [errors, setErrors] = useState({});
    const [value, setValue] = useState({
        id:'',firstName: '', middleName:'', lastName:'', locationCity:'', address: '', dateBirth: '',
        telephone:'', positionTitle:'', hireDate:'', email:'', salary: 0, timePosition:'', status: true   
    })

    const [title, setTitle] = useState('Add Employee')
    const [stateButton, setStateButton] = useState(true)

    useEffect(()=>{
        let methods = 'GET';
        dispatch(getEmployeeAction(methods))
      },[])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue((state) => ({
            ...state,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        }))
        setErrors({ ...errors, [name]: '' });
    }

    const validaRequest = (opcion, id, firstName, middleName, lastName, locationCity, address, dateBirth,
        telephone, positionTitle, hireDate, email, salary, timePosition, status
     ) => {

        if(opcion === 1){
            if(validateForm()){
                let methods = 'POST';
                dispatch(saveEmployeeAction(methods, value))
                const button = document.getElementById("btnCerrar");
                button.click();
    
                setValue({
                    id: '',firstName: '', middleName:'', lastName:'', locationCity:'', address: '', dateBirth: '',
                    telephone:'', positionTitle:'', hireDate:'', email:'', salary: 0, timePosition:'', status: true   
                })
    
                alert("employee successfully saved")
            }
        }else if (opcion === 2){
            setTitle('Edit Employee')
            setStateButton(false)
            setValue({
                id: id,firstName: firstName, middleName: middleName, lastName:lastName, locationCity: locationCity, address: address, dateBirth: dateBirth,
                telephone: telephone, positionTitle: positionTitle, hireDate: hireDate, email:email, salary: salary, timePosition:timePosition, status: true   
            })

        }else if(opcion === 3){
            setTitle('Add Employee')
            setStateButton(true)
        }
        else if(opcion === 4){
            let methods = 'PUT';
                dispatch(updateEmployeeAction(methods, value))
                const button = document.getElementById("btnCerrar");
                button.click();
                alert("Update successfully saved")
        }
          
    }

    const validateForm = () => {
        const newErrors = {};
    
        if (!value.firstName) {
          newErrors.firstName = 'Field is required.';
        }

        if (!value.middleName) {
            newErrors.middleName = 'Field is required.';
        }

        if (!value.lastName) {
            newErrors.lastName = 'Field is required.';
        }

        if (!value.locationCity) {
            newErrors.locationCity = 'Field is required.';
        }

        if (!value.address) {
            newErrors.address = 'Field is required.';
        }

        if (!value.dateBirth) {
            newErrors.dateBirth = 'Field is required.';
        }

        const phoneRegex = /^\d+$/;
        if (!value.telephone) {
            newErrors.telephone = 'Field is required.';
        }else if (!phoneRegex.test(value.telephone)) {
            newErrors.telephone = 'Cell phone number must only contain numeric digits';
        } else if (value.telephone.length > 10) {
            newErrors.telephone = 'Cell phone number must only contain 10 digits';
        } else if (value.telephone.length < 10) {
            newErrors.telephone = 'Cell phone number must contain 10 digits';
        }

        if (!value.positionTitle) {
            newErrors.positionTitle = 'Field is required.';
        }

        if (!value.hireDate) {
            newErrors.hireDate = 'Field is required.';
        }

        if (!value.salary) {
            newErrors.salary = 'Field is required.';
        }else if (!phoneRegex.test(value.salary)) {
            newErrors.salary = 'Cell phone number must only contain numeric digits';
        }else if (value.salary.length > 10) {
            newErrors.salary = 'Cell phone number must only contain 10 digits';
        }

        if (!value.timePosition) {
            newErrors.timePosition = 'Field is required.';
        }
    
        if (!value.email) {
          newErrors.email = 'Field is required.';
        } else if (!/\S+@\S+\.\S+/.test(value.email)) {
          newErrors.email = 'Field is not valid.';
        }
    
       
    
        setErrors(newErrors);
    
        // Si no hay errores, retorna true
        return Object.keys(newErrors).length === 0;
      };

    return(
        <div>
      <div className="App">
        <div className="container-fluid">
          <div className='row mt-3'>
            <div className="col-md-4 offset-4">
              <div className="d-grid mx-auto">
                <button className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#modalEmployees" onClick={() => validaRequest(3)}>
                  <i className="fa solid fa-circle-plus"></i> Add Employee
                </button>
              </div>
            </div>
          </div>
         <br></br> 
          <div className="row mt-3">
            <div className="col-12 col-lg-8 offset-0 offset-lg-2">
              <div className="table-responsive">
                <table className="table table-bordered">

                  <thead>
                    <th>#Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Position Title</th>
                    <th>Date Arrival</th>
                    <th>Status</th>
                    <th>Opciones</th>
                  </thead>
                  <tbody className="table-group-divider">

                    {employees ? employees.map((employee, i) => {
                      return (<tr key={employee.id}>
                        <td>{(i + 1)}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.positionTitle}</td>
                        <td>{employee.hireDate}</td>
                        <td>{String(employee.status)}</td>
                        <td>
                        
                        <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalEmployees" onClick={() => validaRequest(2, employee.id, employee.firstName, employee.middleName, employee.lastName, employee.locationCity, employee.address, employee.dateBirth,
                        employee.telephone, employee.positionTitle, employee.hireDate, employee.email, employee.salary, employee.timePosition, employee.status)}>
                            <i className="fa-solid fa-edit">Detail</i>
                          </button>
                          {/*<button className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalProducts" onClick={() => openModal(2, task.id, task.name, task.description, task.Category,task.user, task.state, task.priority)}>
                            <i className="fa-solid fa-edit"></i>
                          </button>
                          &nbsp;
                          <button className="btn btn-danger" onClick={() => deleteTask(task.id)}>
                            <i className="fa-solid fa-trash"></i>
                          </button>*/}
                        </td>

                      </tr>)
                    })
                      : 'No hay nada'}

                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>

        {/* modal form create and update Employee */}
        <div id="modalEmployees" className="modal fade" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <label className="h5">{title}</label>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
              </div>
              <div className="modal-body">
                <label className="h5">Employee Information</label>
                <input type="hidden" id="id"></input>
                    <Input className="form-control" id="firstName" placeholder="First Name" name="firstName" value={value.firstName} onChange={handleChange}></Input>
                    {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
                    <Input className="form-control" id="middleName" placeholder="Middle Name" name="middleName" value={value.middleName} onChange={handleChange}></Input>
                    {errors.middleName && <p style={{ color: 'red' }}>{errors.middleName}</p>}
                    <Input className="form-control" id="lastName" placeholder="Last Name" name="lastName" value={value.lastName} onChange={handleChange}></Input>
                    {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
                    <Select class="form-control" value={value.locationCity} data={cities} label={'Location city'} name="locationCity" onChange={handleChange}></Select>
                    {errors.locationCity && <p style={{ color: 'red' }}>{errors.locationCity}</p>}
                    <Input className="form-control" id="address" placeholder="Address" name="address" value={value.address} onChange={handleChange}></Input>
                    {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}
                    <Input type="date" className="form-control" id="dateBirth" placeholder="Date Birth" name="dateBirth" value={value.dateBirth} onChange={handleChange}></Input>
                    {errors.dateBirth && <p style={{ color: 'red' }}>{errors.dateBirth}</p>}
                    <Input className="form-control" id="telephone" placeholder="Telephone" name="telephone" value={value.telephone} onChange={handleChange}></Input>
                    {errors.telephone && <p style={{ color: 'red' }}>{errors.telephone}</p>}
                
                <label className="h5">Employee Position</label>

                    <Select class="form-control" value={value.positionTitle} data={positions} label={'Position Title'} name="positionTitle" onChange={handleChange}></Select>
                    {errors.positionTitle && <p style={{ color: 'red' }}>{errors.positionTitle}</p>}
                    <Input type="date" className="form-control" id="hireDate" placeholder="Hire Date" name="hireDate" value={value.hireDate} onChange={handleChange}></Input>
                    {errors.hireDate && <p style={{ color: 'red' }}>{errors.hireDate}</p>}
                    <Input className="form-control" id="email" placeholder="Email" name="email" value={value.email} onChange={handleChange}></Input>
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                    <Input className="form-control" id="salary" placeholder="Salary" name="salary" value={value.salary} onChange={handleChange}></Input>
                    {errors.salary && <p style={{ color: 'red' }}>{errors.salary}</p>}
                    <Input className="form-control" id="timePosition" placeholder="Time Position" name="timePosition" value={value.timePosition} onChange={handleChange}></Input>
                    {errors.timePosition && <p style={{ color: 'red' }}>{errors.timePosition}</p>}
              </div>
              <div className="modal-footer">
                {stateButton ? (<button className="btn btn-success" onClick={() => validaRequest(1)}>save</button>) :
                
                <button className="btn btn-success" onClick={() => validaRequest(4)}>Update</button>
                }
                
                
                <button type="button" id="btnCerrar" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
    )
}

export default Employee;