import { useSelector, useDispatch } from 'react-redux'
import { deleteTask } from "../features/tasks/taskSlice"
import './taskList.css'

function TaskList() {
    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }

    console.log('tasklist')
    return (
        <div>
            {tasks.map(task => (
                <div className='task' key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <button onClick={() => handleDelete(task.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default TaskList