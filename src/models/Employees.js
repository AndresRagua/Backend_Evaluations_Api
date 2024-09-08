import { Schema, model } from "mongoose";

const employeesSchema = new Schema({
    name: String,
    last_name: String,
    mail: String,
    phone: String,
    address: String,
}, {
    timestamps: true,
    versionKey: false
})

export default model('Employees', employeesSchema);