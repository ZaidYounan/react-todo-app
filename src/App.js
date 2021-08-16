import Todo from "./components/Todo";
import Form from "./components/Form";
import Filter from "./components/Filter";
import { useState } from "react";
import { nanoid } from 'nanoid';

function App(props) {


  const [tasks, setTasks] = useState(props.tasks);


  const taskList = tasks.map(task => (
    <Todo 
    id={task.id} 
    key={task.id}
    name={task.name} 
    completed={task.completed} 
    />
  ));

  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;


  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="todoapp stack-large">
      <h1>Do-Too</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <Filter/>
      </div>
      <h2 id="list-heading">
        {headingText}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
{taskList}
      </ul>
    </div>
  );
}
export default App;
