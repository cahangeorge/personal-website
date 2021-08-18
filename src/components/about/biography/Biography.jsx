import React from 'react'
import './biography.scss';

export default function Biography({icon, description}) {
    return (
        <div className='biography d-flex flex-column align-items-center justify-content-center shadow my-3 p-3 text-center' data-aos='zoom-in'>
                {icon}
                <p>{description}</p>    
            </div>  
    )
}
