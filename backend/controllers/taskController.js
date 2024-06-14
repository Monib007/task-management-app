// define how our data will be saved in the database

const taskModel = require("../models/taskModel");

module.exports.getTasks = async (req, res) => {
    const task = await taskModel.find();
    res.send(task);
};

module.exports.saveTasks = async (req, res) => {
    const { text } = req.body;

    taskModel.create({ text }).then((data) => {
        console.log("Added successfully...");
        console.log(data);
        res.send(data);
    });
};

module.exports.updateTasks = async(req, res) => {
    const {_id, text} = req.body
    taskModel
    .findByIdAndUpdate(_id, {text})
    .then(() => res.send("Updated successfully..."))
    .catch((err)=> console.log(err))
}

module.exports.deleteTasks = async(req, res) => {
    const {_id} = req.body
    taskModel
    .findByIdAndDelete(_id)
    .then(() => res.send("Deleted successfully..."))
    .catch((err)=> console.log(err))
}
