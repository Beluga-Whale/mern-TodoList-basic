import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const ListTodo = () => {
    const [todo, setTodo] = useState([]);
    const { id } = useParams;
    useEffect(() => {
        axios
            .get('http://localhost:5000/todolist')
            .then(res => {
                setTodo(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const deleteTodo = e => {
        const id = e.target.id;
        axios
            .delete(`http://localhost:5000/todolist/delete-todo/${id}`)
            .then(() => {
                console.log('delete success');
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="mx-auto max-w-7xl">
            <table className="table-auto w-full text-center">
                <thead>
                    <tr>
                        <th>List</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todo.map(data => (
                        <tr key={data._id}>
                            <td>{data.todo}</td>
                            <td>{data.author}</td>
                            <td>
                                <button className="bg-red-300 p-2 rounded-lg hover:bg-red-500 mr-2  mb-2">
                                    <Link to={`/edit/${data._id}`}>Edit</Link>
                                </button>
                                <button
                                    onClick={deleteTodo}
                                    id={data._id}
                                    className="bg-blue-300 p-2 rounded-lg hover:bg-blue-500"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListTodo;
