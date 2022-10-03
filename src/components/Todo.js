import React, {useState, useEffect} from 'react'
import './Todo.css'
import ShowTodo from './ShowTodo'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getLocalItems = () => {
    let list = localStorage.getItem('list')

    if(list) {
        return JSON.parse(list)
    } else {
        return [];
    }
}

function Todo() {

    const [task, setTask] = useState("");
    const [data, setData] = useState(getLocalItems());

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const newData = task;

        setData([...data,newData])
        setTask('');
        toast.success("New task added successfully");
    }

    const deleteItem = (id) => {
        const filterData = data.filter((items, index) => {
            return index != id
        })
        setData(filterData);
        toast("Task deleted successfully");
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(data))
    }, [data])

    return (
        <div className='container container__input'>
            <ToastContainer />
        <div className='row justify-content-center align-item-center main-row'>
            <div className='col shadow main-col bg-white'>
                <div className='row header_bg text-white'>
                    <div className='col p-2'>
                        <h4 className='text-center'>Todo List</h4>
                    </div>
                </div>
                <form onSubmit={onSubmitHandler}>
                    <div className='row justify-content-between text-white p-2'>
                        <div className='form-group flex-fill mb-2 col-9'>
                            <input id='todo-input' type='text' className='form-control' placeholder='add some task' value={task} onChange={(e) => {
                                setTask(e.target.value)
                            }} required/>
                        </div>
                        <button type='submit' className='btn add_bg btn-primary mb-2 ml-2 col-3'>Add todo</button>
                    </div>
                </form>

                {
                    data.map((value,index) =>  <ShowTodo key={index} id={index} task={value} onSelect={deleteItem}/>)
                }

            </div>
        </div>
        </div>
    )
}

export default Todo
