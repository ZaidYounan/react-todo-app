import Todo from "./components/Todo";
import Form from "./components/Form";
import Filter from "./components/Filter";

function App(props) {

  const taskList = props.tasks.map(task => (
    <Todo 
    id={task.id} 
    key={task.id}
    name={task.name} 
    completed={task.completed} 
    />
  ));

  function addTask(name) {
    alert(name);
  }

  return (
    <div className="todoapp stack-large">
      <h1>Do-Too</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <Filter/>
      </div>
      <h2 id="list-heading">
        3 tasks remaining
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
