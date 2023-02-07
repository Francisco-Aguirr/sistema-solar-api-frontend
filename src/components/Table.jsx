import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const url = 'http://localhost:8000/api'

function MyTable() {

  const [elementos, setElementos] = useState([]);

    useEffect( () => {
        getAllElements();
    }, [])

    const getAllElements = async () => {
        const response = await axios.get(`${url}/planetas`);
        setElementos(response.data);
    }

    const deleteElement = async (id) => {
        await axios.delete(`${url}/planetas/${id}`);
        getAllElements();
    }

  return (
    
    <Table striped bordered hover variant="dark" >
      <Link to="/create" className='btn btn-success btn-lg '> Create </Link>
      <thead>
        <tr>
          <th>Name</th>
          <th>Info</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className='tabla-planets'>
      {
                    elementos.map( (elemento) => (
                        <tr key={elemento.id}>
                            <td>{elemento.name}</td>
                            <td>{elemento.info}</td>
                            <td>
                                <Link to={`/edit/${elemento.id}`} className='btn btn-warning'>Edit</Link>
                                <button onClick={() => deleteElement(elemento.id)} className="btn btn-danger">Delete</button>
                            </td>

                        </tr>
                    ))
                }
        
      </tbody>
    </Table>
  );
}

export default MyTable;