import React from 'react';
import {VscEmptyWindow} from 'react-icons/vsc';


function EmptyValues() {
  return (
    <div className='empty-values-div'>
    
       
     
        <h4>
        <VscEmptyWindow size={23+`px`} />     The Finance model is empty at the Moment
        </h4>
    </div>
  )
}

export default EmptyValues