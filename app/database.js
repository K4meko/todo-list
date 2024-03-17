import PouchDB from "pouchdb";
import {v4 as uuidv4} from "uuid";

const database = new PouchDB("my_database");

export function addTodoItem(title) {
  const todoItem = {
    id: uuidv4(),
    title: title,
    completed: false,
  };

  database
    .put(todoItem)
    .then(response => console.log("Todo item added: ", response))
    .catch(error => console.error("Error adding todo item: ", error));
}
export function getAllTodoItems() {
  return database
    .allDocs({include_docs: true})
    .then(response => response.rows.map(row => row.doc))
    .catch(error => console.error("Error getting todo items: ", error));
}

// Usage
//addTodoItem("Buy milk");
