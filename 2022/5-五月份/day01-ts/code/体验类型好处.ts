import axios from "axios";
interface todo{
    id: number;
    title: string;
    completed:boolean
}
axios.get("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
  const todo = response.data as todo;
  const id = todo.id;
  const title = todo.title;
  const finished = todo.completed;
 logoTodo(id,title,finished)
});
function logoTodo(id: number, title: string, completed: boolean) {
    console.log(id,title,completed)
}