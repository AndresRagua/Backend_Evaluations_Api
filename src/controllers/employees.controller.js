import Employee from '../models/Employees'

export const createEmployee = async (req, res) => {

    const {name, last_name, mail, phone, address} = req.body;
    const newEmployee = new Employee({name, last_name, mail, phone, address});
    
    const employeeSaved = await newEmployee.save()
    
    res.status(201).json(employeeSaved)
}

export const getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees)
}

export const getEmployeeById = (req, res) => {
    res.json("Obtener Empleado por id")
}

export const updateEmployeeById = (req, res) => {
    res.json("Actualizar Empleado por id")
}

export const deleteEmployeeById = (req, res) => {
    res.json("Eliminar Empleado por id")
}
