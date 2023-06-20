import './App.css'
import { useSelector } from 'react-redux'
import TaskForm from './components/TaskForm'
import TaskList from "./components/TaskList"
import PokeList from './components/PokeList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  const tasksState = useSelector(state => state.tasks)
  console.log(tasksState)

  return (
    <div className="bg-zinc-900 h-screen text-white">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaskList />} />
          <Route path='/create-task' element={<TaskForm />} />
          <Route path='/edit-task/:id' element={<TaskForm />} />
          <Route path='/pokemon-query' element={<PokeList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
