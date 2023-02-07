import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const url = 'http://localhost:8000/api/planetas'


const Edit = () => {

  const [nombre, setNombre] = useState('');
  const [info, setInfo] = useState('');
  const navigate = useNavigate();
  const {id} = useParams()

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${url}${id}`, {
      name: nombre,
      info: info
    } )
    navigate('/')
  }

  useEffect( () => {
    const getElementsById = async () => {
      const response = await axios.get(`${url}${id}`)
      setNombre(response.data.name);
      setInfo(response.data.info);
    }
    getElementsById();
  }, []) 

  return (
    <div>
              <h3>Edit</h3>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'> nombre </label>
                <input 
                value={nombre} 
                onChange={(e)=> setNombre(e.target.value)} 
                type="text"  className='form-control'/>
            </div>
            <div className='mb-3'>
                <label className='form-label'> Info </label>
                <input 
                value={info} 
                onChange={(e)=> setInfo(e.target.value)} 
                type="text"  className='form-control'/>
            </div>
            <button type="submit" className='btn btn-success'>Edit</button>
        </form>
    </div>
  )
}

export default Edit;