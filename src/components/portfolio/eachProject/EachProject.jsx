import React from 'react';
import './eachProject.scss';


export default function EachProject({link, image, title}) {
    return (
        <div className='eachProject shadow p-2 m-3' data-aos='zoom-in'>
                <a href={link}>
                    <img className='shadow-sm' src={image} />
                    <p className='shadow p-2'>{title}</p>
                </a>
            </div>
    )
}
