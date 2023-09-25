import { useState } from 'react';
import TodoTable from './TodoTable';

function TodoList() {
    const [todo, setTodo] = useState({desc: '', date: ''});
    const [todos, setTodos] = useState([]);

    const inputChanged = (event) => {
        setTodo({...todo, [event.target.name]: event.target.value});
    }

    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, todo]);
    }
    const deleteTodo = (index) => {
        setTodos(todos.filter((todo, i) => i !== index));
    }

    return (
        <div className="TodoList">
            <label>
                Date: 
                <input type="date" name='date' onChange={inputChanged} value={todo.date}/>
            </label>
            <label>
                Description: 
                <input type="text" name='desc' onChange={inputChanged} value={todo.desc}/>
            </label>
            <button onClick={addTodo}>Add</button>
            <TodoTable todos={todos} deleteTodo={deleteTodo} />
        </div>
    );
};

export default TodoList;