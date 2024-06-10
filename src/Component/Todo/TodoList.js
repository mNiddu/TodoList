import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodo,FinishedTodo,ClearTodo} from './Redux/Action';
import './TodoList.css';

export default function TodoList() {
    const dispatch = useDispatch();
    const [todoData, setTodoData] = useState({});
    const [currenttab,setCurrectTab]=useState("AllTasks")
    const todoList = useSelector(state => state.todo); 

    const handleChange = (e) => {
        setTodoData({ ...todoData, [e.target.name]: e.target.value });
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            dispatch(AddTodo(todoData));
        }
    };

    const handleClear = () => {
   dispatch(ClearTodo());
    };

    const filterTask=()=>{
        if(currenttab=="pending"){
            return todoList.filter((item)=>item.status=="pending")
        }else if(currenttab=="Finished"){
            return todoList.filter((item)=>item.status=="Finished")
        }
        return todoList
    }

    const filteredList=filterTask();

    const handleClick = (tab) => {
        setCurrectTab(tab);
    };
    const handleCheck = (id) => {
        dispatch(FinishedTodo(id))
    };

    return (
        <div className='todo-container'>
            <div className='todo-card'>
                <div className='todo-main'>
                    <h4>To-Do App</h4>
                </div>
                <div className='todo-input'>
                    <input
                        type='text'
                        name='task'
                        onChange={handleChange}
                        onKeyDown={handleKeyPress}
                        placeholder='Add a new task'
                    />
                </div>
                <div className='todo-tab'>
                    <div className='todo-head' onClick={() => handleClick('AllTasks')}>All Tasks</div>
                    <div className='todo-head' onClick={() => handleClick('pending')}>Remaining</div>
                    <div className='todo-head' onClick={() => handleClick('Finished')}>Finished</div>
                </div>
                <div className='divider'></div>
               <div className='main-list'>
               {filteredList.length === 0 ? (
                    <div className='todo-list'>No Data</div>
                ) : (
                    filteredList.map((item, index) => (
                        <div className='todo-list' key={index}>
                            <input
                                type='checkbox'
                                checked={item.status === 'Finished'}
                                onChange={() => { handleCheck(item.tid); }}
                            />
                            <div className={`list ${item.status === 'Finished' ? 'finished' : ''}`}>
                                {item.task}
                            </div>
                            <div className='todo-list-divider'></div>
                        </div>
                    ))
                )}
               </div>
                <div className='todo-click'>
                    <button onClick={handleClear}>Clear all</button>
                </div>
            </div>
        </div>
    );
}
