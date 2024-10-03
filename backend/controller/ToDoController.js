const ToDoModel = require('../models/ToDoModel'); // Fixed path

// Get all ToDos
module.exports.getToDo = async (req, res) => {
    const toDo = await ToDoModel.find();
    res.send(toDo);
};

// Save a new ToDo
module.exports.saveToDo = async (req, res) => {
    const { text } = req.body;
    ToDoModel
        .create({ text })
        .then((data) => {
            console.log('Added successfully');
            console.log(data);
            res.send(data);
        })
        .catch((error) => res.status(500).send(error)); // Add error handling
};
