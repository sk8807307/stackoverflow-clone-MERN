import mongoose from 'mongoose'
import Question from '../models/Question.js'

export const postAnswer = async(req, res) => {
    const { id: _id } = req.params;
    const { noOfAnswers, answerBody, userAnswered } = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('question unavailable');
    }
    updateNoOfQuestions(_id, noOfAnswers)
    try {
        const updateQuestion = await Question.findByIdAndUpdate(_id, { addToSet: {'answer': [{ answerBody, userAnswered, userId: req.userId}]}})
        req.status(200).json(updateQuestion())
    } catch (error) {
        res.status(404).json(error)
    }
}

const updateNoOfQuestions = async (_id, noOfAnswers) => {
    try {
        await Question.findByIdAndUpdate(_id, { $set: { 'noOfAnswers' : noOfAnswers}})
    } catch (error) {
        console.log(error)
    }
}