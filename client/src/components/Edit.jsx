import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Edit = () => {
    const { id } = useParams();
    const [formTodo, setFormTodo] = useState({
        todo: '',
        author: '',
    });

    const { todo, author } = formTodo;

    const onChange = e => {
        setFormTodo(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const save = e => {
        e.preventDefault();
        axios
            .put(`http://localhost:5000/todolist/edit-todo/${id}`, formTodo)
            .then(res => {
                console.log(res.data);
            });
    };
    return (
        <div className="mx-auto max-w-7xl">
            <form onSubmit={save}>
                <label>Todo:</label>
                <input
                    className="border-4 border-indigo-500/100"
                    type="text"
                    name="todo"
                    value={todo}
                    onChange={onChange}
                />
                <br />
                <label>Author:</label>
                <input
                    className="border-4 border-indigo-500/100 mt-1"
                    type="text"
                    name="author"
                    value={author}
                    onChange={onChange}
                />
                <br />
                <button className="p-4 bg-red-500" type="submit">
                    Save
                </button>
            </form>
        </div>
    );
};

export default Edit;
