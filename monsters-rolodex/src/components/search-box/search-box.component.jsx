import React from 'react';

import './search-box.styles.css';
   
export const SearchBox = ({ placeholder, handleChange }) => (

 <input 
     //le anadimos el estilo con 'className'
     className = 'search' 
     type='search' 
     placeholder= { placeholder }  
     onChange = {handleChange}
 />
);