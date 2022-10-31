import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Create from './components/Create';
import Edit from './components/Edit';
import ListTodo from './components/ListTodo';

function App() {
  return (
    <Router>
      <div className='' >
        <nav className="bg-[#1a254a] text-white h-20">
          <div className="mx-auto max-w-7xl h-full">
            <div className="flex justify-between h-full items-center">
              <div className="logo">
                <h2 className='font-mono font-bold text-5xl' >
                  <Link to='/' >Beluga</Link>
                </h2>
              </div>
              <div className="menu font-mono">
                <ul className='flex justify-between font-bold w-64 text-2xl' >
                  <li ><Link to='/create' >Create</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<ListTodo />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit/:id' element={<Edit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
