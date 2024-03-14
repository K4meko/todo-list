import {useState} from "react";

const initialTodoListItems = [
  {text: "Do the dishes", done: false},
  {text: "Walk the dog", done: false},
  {text: "Do homework", done: false},
];

export function useTodoListItems() {
  const [todoListItems, setTodoListItems] = useState(initialTodoListItems);
  return [todoListItems, setTodoListItems];
}
