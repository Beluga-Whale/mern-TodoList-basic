import React from 'react';

const ListTodo = () => {
    return (
        <div className="mx-auto max-w-7xl">
            <table class="table-auto w-full text-center">
                <thead>
                    <tr>
                        <th>List</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>Malcolm Lockyer</td>
                        <td>1961</td>
                    </tr>
                    <tr>
                        <td>Witchy Woman</td>
                        <td>The Eagles</td>
                        <td>1972</td>
                    </tr>
                    <tr>
                        <td>Shining Star</td>
                        <td>Earth, Wind, and Fire</td>
                        <td>1975</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ListTodo;
