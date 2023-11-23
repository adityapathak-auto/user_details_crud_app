import logo from './logo.svg';
import './App.css';
import { UserForm } from './components/userForm';

import { Route, Routes } from 'react-router-dom';
import { UserTables } from './components/userTables';
import {  UpdateUser } from './components/update';

function App() {
  return (
    <div className>

      <Routes>
        <Route path='/' element={<UserTables/>}></Route>
        <Route path='/user' element={<UserForm/>}></Route>
        <Route path='/update/:id' element={<UpdateUser/>}></Route>
      </Routes>
       
      
      
    </div>
  );
}

export default App;
