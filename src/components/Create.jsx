import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const url = 'http://localhost:8000/api/planetas'

const Create = () => {

    const [nombre, setNombre] = useState('');
    const [info, setInfo] = useState('');
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        await axios.post(url, {name : nombre, info : info})
       navigate('/')
    }

  return (
    <div className='container'>
        <h3>Create</h3>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'> nombre </label>
                <input 
                value={nombre} 
                onChange={(e)=> setNombre(e.target.value)} 
                type="text"  className='form-control'/>
            </div>
            <div className='mb-3'>
                <label className='form-label'> info </label>
                <input 
                value={info} 
                onChange={(e)=> setInfo(e.target.value)} 
                type="text"  className='form-control'/>
            </div>
            <button type="submit" className='btn btn-success'>Store</button>
        </form>
    </div>
  )
}

export default Create;