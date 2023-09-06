import todoModel from "../model/todoModel.js";

export const getAlltodo = async (req, res, next) => {
  let todos;
  console.log("gettoodo");
  try {
    todos = await todoModel.find();
  } catch (error) {
    console.log("error");
  }

  res.json({
    todos,
  });
};
export const createTodo = async (req, res) => {
  let todo;
  try {
    todo = await todoModel
      .create(req.body)
      .then((data) => {
        console.log("added successfully");
        res.send(data);
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log("error");
  }
  res.send(todo);
};

export const updateTodo = (req, res, next) => {
  const { id } = req.params;
  const { text } = req.body;
  console.log(id);
  console.log(req.body);
  todoModel
    .findByIdAndUpdate(id, {text} )
    .then((todo) => res.status(200).send(todo))
    .catch((err) => console.log("err"));
};

export const deleteTodo = (req, rs, next) => {
  const { id } = req.params;
  todoModel
    .findByIdAndDelete(id)
    .then(() => res.status(200).send("deleted succfully"))
    .catch((err) => console.log("err"));
};
