import { useState } from 'react';

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
            <table>
                <tbody>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                    </tr>
                    {todos.map((todo, index) => 
                            <tr key={index}>
                                <td>{todo.date}</td>
                                <td>{todo.desc}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;