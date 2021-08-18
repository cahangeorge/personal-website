import React from 'react';
import './progress.scss';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Progress({title, procent}) {
    return (
        <div className='progressBar d-flex flex-column my-3'>
                <div className="top d-flex flex-row align-items-center justify-content-between" data-aos='zoom-in'>
                    <p>{title}</p>
                    <p>{procent}%</p>
                </div>
                <ProgressBar animated now={procent} className='bar shadow col-12' data-aos='zoom-in' />
            </div>
    )
}
