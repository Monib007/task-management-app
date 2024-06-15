
import axios from 'axios'

const baseUrl = "http://localhost:5000"

const getAllTasks = (setTasks) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('data ----> ', data)
            setTasks(data)
        })
}

const addTask = (text, setText, setTasks) => {
    axios
        .post(`${baseUrl}/save`, {text})
        .then((data) => {
            console.log(data)
            setText('');
            getAllTasks(setTasks);
        })
        .catch((err) => console.log(err))
}

const updateTask = (taskId, text, setTasks, setText, setIsUpdating) => {
    axios 
    .post(`${baseUrl}/update`, { _id: taskId, text })
    .then((data) => {
        setText('')
        setIsUpdating(false)
        getAllTasks(setTasks)
    })
    .catch((err) => console.log(err))
}

const deleteTask = ( taskId, setTasks) => {
    axios
    .post(`${baseUrl}/delete`, {_id : taskId })
    .then((data) => {
        console.log(data)
        getAllTasks(setTasks)
    })
    .catch((err) => console.log(err))
}

export { getAllTasks, addTask, updateTask, deleteTask } 