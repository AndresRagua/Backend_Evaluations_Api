import Evaluation from '../models/Evaluations.js'

export const createEvaluation = async (req, res) => {

    const { description, date, employee } = req.body;
    const newEvaluation = new Evaluation({ description, date, employee });

    const evaluationSaved = await newEvaluation.save()

    res.status(201).json(evaluationSaved)
}

export const getEvaluations = async (req, res) => {
    const evaluations = await Evaluation.find();
    res.json(evaluations)
}

export const updateEvaluationById = async (req, res) => {
    const updatedEvaluation = await Evaluation.findByIdAndUpdate(
        req.params.evaluationId,
        req.body,
        {
            new: true,
        }
    );
    res.status(204).json(updatedEvaluation);
};

export const deleteEvaluationById = async (req, res) => {
    const { evaluationId } = req.params;

    await Evaluation.findByIdAndDelete(evaluationId);

    res.status(204).json();
};