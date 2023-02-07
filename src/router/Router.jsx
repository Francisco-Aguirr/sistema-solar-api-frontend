import React from 'react';

import { BrowserRouter, Route, Routes} from "react-router-dom" ;

import Home from '../views/Home';
import Create from '../components/Create';
import Show from '../components/Show';
import Edit from '../components/Edit';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            {/* path direccion */}
            <Route path="/" element= {<Home/>}/>
            <Route path="/Create" element= {<Create/>}/>
            <Route path="/Show" element= {<Show/>}/>
            <Route path="/Edit" element= {<Edit/>}/>
           
        </Routes>
        
        </BrowserRouter>
  );
}

export default Router