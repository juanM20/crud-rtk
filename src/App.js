import './App.css';
import { useSelector } from 'react-redux'
import TaskForm from './components/TaskForm';
import TaskList from "./components/TaskList"

function App() {

  const tasksState = useSelector(state => state.tasks)
  console.log(tasksState);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
