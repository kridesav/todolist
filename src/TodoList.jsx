import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { useRef } from "react";

function TodoList() {
    const [todo, setTodo] = useState({ desc: '', date: '', priority: '' });
    const [todos, setTodos] = useState([]);
    const gridRef = useRef();

    const inputChanged = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    }

    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, todo]);
    }
    const deleteTodo = () => {
        if (gridRef.current.getSelectedNodes().length > 0) {
            setTodos(todos.filter((todo, index) =>
                index != gridRef.current.getSelectedNodes()[0].id))
        }
        else {
            alert('Select row first');
        }
    };
    const columns = [
        { field: "desc", sortable: true, filter: true, floatingFilter: true },
        { field: "date", sortable: true, filter: true, floatingFilter: true },
        {
            field: "priority", sortable: true, filter: true, floatingFilter: true,
            cellStyle: params => params.value === "High" ? { color: 'red' } : { color: 'black' }
        },
    ];
    

    return (
        <div>
            <div className="TodoList">
                <input type="text" onChange={inputChanged} placeholder="Description" name="desc" value={todo.desc} />
                <input type="date" onChange={inputChanged} placeholder="Date" name="date" value={todo.date} />
                <input type="text" onChange={inputChanged} placeholder="Priority" name="priority" value={todo.priority} />
                <button onClick={addTodo}>Add</button>
                <button onClick={deleteTodo}>Delete</button>
            </div>
            <div className="ag-theme-material"
                style={{ height: '700px', width: '100%', margin: 'auto' }} >
                <AgGridReact
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    rowSelection="single"
                    columnDefs={columns}
                    rowData={todos}
                    animateRows={true}>
                </AgGridReact>
            </div>
        </div>
    );
};

export default TodoList;