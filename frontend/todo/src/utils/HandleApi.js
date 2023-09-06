import axios from "axios";

const baseurl = "http://localhost:4000";

export const getAllTodo = (setTodo) => {
  axios.get(baseurl).then((res) => {
    setTodo(res.data.todos);
  });
};

export const addTodo = (text, setupdateui, setTodo, setText) => {
  axios.post(`${baseurl}/new`, { text }).then((data) => {
    console.log(data);
    setText("");
    setupdateui((prevstate) => !prevstate);
  });
};
export const updateTodo = (todoid, text, setText, setUpdating, setupdateui) => {
  console.log(todoid);
  console.log(text, "text");

  try {
    axios
      .put(`${baseurl}/update/${todoid}`, { text: text })
      .then((data) => {
   
        setUpdating(false);
        setupdateui((prev) => !prev);
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log("error");
  }
};
export const deleteTodo = (todoid, setupdateui) => {
  console.log(todoid);
  axios.delete(`${baseurl}/delete/${todoid}`).then((data) => {
    console.log(data);
  });
  setupdateui((prevstate) => !prevstate);
};
