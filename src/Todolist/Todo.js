import React from 'react';

export default function Todo({ id, title, description }) {
    return ( <div className='todo'> 
    { id } { title } * { description }
    </div> )

}