const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const port = process.env.PORT || 8080

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a todo

app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//create todos2
app.post("/todos2", async (req, res) => {
  try {
     const newTodoList = await pool.query(
      "INSERT INTO todo2 (id,description) VALUES($1,$2) RETURNING *",
      [req.body.id, req.body.description]
    );

    res.json(newTodoList.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//create document
app.post("/document", async (req, res) => {
  try {
     const newDocument = await pool.query(
      "INSERT INTO doc_details(app_id, case_id, doc_cat, file_name, doc_meta_msg, updated_by, updated_on) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *",
      [req.body.app_id, req.body.case_id, req.body.doc_cat, req.body.file_name, req.body.doc_meta_msg, req.body.updated_by, req.body.updated_on]
    );

    res.json(newDocument.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all todos

// app.get("/todos", async (req, res) => {
//   try {
//     const allTodos = await pool.query("SELECT * FROM db.todo");
//     res.json(allTodos.rows);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// //get a todo

// app.get("/todos/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
//       id
//     ]);

//     res.json(todo.rows[0]);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// //update a todo

// app.put("/todos/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { description } = req.body;
//     const updateTodo = await pool.query(
//       "UPDATE todo SET description = $1 WHERE todo_id = $2",
//       [description, id]
//     );

//     res.json("Todo was updated!");
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// //delete a todo

// app.delete("/todos/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
//       id
//     ]);
//     res.json("Todo was deleted!");
//   } catch (err) {
//     console.log(err.message);
//   }
// });

//app.listen(5000, () => {
app.listen(port, () => {
  console.log("server has started on port:3000");  
});
