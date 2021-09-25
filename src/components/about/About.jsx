import React from 'react';
import './about.scss';
import Progress from './progress/Progress';
import Biography from './biography/Biography';

import { FcEngineering, FcPanorama, FcCommandLine } from "react-icons/fc";

export default function About() {
    const list = [
        {
            title: 'HTML',
            procent: '100'
        },
        {
            title: 'CSS',
            procent: '100'
        },
        {
            title: 'JavaScript',
            procent: '80'
        },
        {
            title: 'Bootstrap',
            procent: '60'
        },
        {
            title: 'Sass',
            procent: '50'
        },
        {
            title: 'React',
            procent: '50'
        },
        {
            title: 'D3.js',
            procent: '60'
        },
        {
            title: 'NodeJS',
            procent: '40'
        },
        {
            title: 'jQuery',
            procent: '40'
        }
    ];

    const biography = [
        {
            icon: <FcEngineering className='display-1' />,
            description: 'When I got to high school I fell in love with programming and started to learn and create various applications.'
        },
        {
            icon: <FcPanorama className='display-1' />,
            description: 'I created crazy 3D models for fun when I was little.'
        },
        {
            icon: <FcCommandLine className='display-1' />,
            description: 'I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences..'
        }
    ];

    return (
        <div className='about d-flex flex-column align-items-center justify-content-around py-5' id='about'>
            <div className='title my-5 py-5'>
                <h2 className='display-3' data-aos='zoom-in'>About me.</h2>
                <div className='bar-h2' data-aos='zoom-in'></div>
            </div>
            <div className="child-about d-flex flex-row flex-wrap justify-content-around align-items-center">
                <div className="d-flex flex-column col-10 col-sm-8 col-md-7 col-lg-5 col-xl-5">
                    {biography.map(item => (
                        <Biography 
                            key={item.description}
                            icon={item.icon}
                            description={item.description}
                        />
                    ))}
                </div>
                <div className="skills col-10 col-sm-8 col-md-7 col-lg-5 col-xl-5">
                    {list.map(item => (
                        <Progress 
                            key={item.title}
                            title={item.title}
                            procent={item.procent}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
