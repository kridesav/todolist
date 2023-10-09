import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { useRef } from "react";
import DatePick from './DatePicker';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


function TodoList() {
    const [todo, setTodo] = useState({ desc: '', date: '', priority: '' });
    const [todos, setTodos] = useState([]);
    const gridRef = useRef();

    const inputChanged = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    }

    const handleDateChange = (date) => {
        setTodo({ ...todo, date });
    };

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
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                <TextField
                    label="Description"
                    variant="standard"
                    name="desc" value={todo.desc}
                    onChange={inputChanged} />

                <DatePick onDateChange={handleDateChange} />
                <TextField
                    label="Priority"
                    variant="standard"
                    name="priority" value={todo.priority}
                    onChange={inputChanged} />
                <Button onClick={addTodo} variant='contained'>Add</Button>
                <Button onClick={deleteTodo} >Delete</Button>
            </Stack>
            </div><div className="ag-theme-material"
                style={{ height: '700px', width: '74%', margin: 'auto' }}>
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