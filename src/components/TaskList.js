import { useSelector, useDispatch } from 'react-redux'
import { deleteTask } from "../features/tasks/taskSlice"
import { Link } from 'react-router-dom'
import './taskList.css'

function TaskList() {
    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }

    return (
        <div className='container mx-auto'>

            <header>
                <h1 className='text-3xl font-bold underline'>Total Tasks: {tasks.length}</h1>
                <div className='menu flex flex-row'>
                    <Link className='basis-1/4' to='/create-task'>Create Task </Link>
                    <Link className='basis-1/4' to='/pokemon-query'>Pokemon API </Link>
                </div>
            </header>

            {tasks.map(task => (
                <div className='task' key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <button onClick={() => handleDelete(task.id)}>Delete  </button>

                    <Link to={`/edit-task/${task.id}`}>Edit  </Link>
                </div>
            ))}
        </div>
    )
}

export default TaskList