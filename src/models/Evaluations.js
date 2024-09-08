import { Schema, model } from "mongoose";

const evaluationSchema = new Schema({
    description: {
        type: String,
    },
    date: {
        type: Date,
    },
    employee: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "employee",
    }]
}, {
    timestamps: true,
    versionKey: false
});
