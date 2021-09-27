import React from 'react';
import './portfolio.scss';
import EachProject from './eachProject/EachProject';

import movie from '../../assets/movie.png';
import weather from '../../assets/weather.png';
import todo from '../../assets/todo.png';
import form from '../../assets/survey-form (2).png';
import art from '../../assets/art-shirts.png';

export default function Portfolio() {
    const list = [
        {
            link: 'https://codepen.io/cahangeorge/pen/vYmzyya',
            image: movie,
            title: 'Movie Searcher App'
        },
        {
            link: 'https://codepen.io/cahangeorge/pen/jOmeJKB',
            image: weather,
            title: 'Weather App'
        },
        {
            link: 'https://codepen.io/cahangeorge/pen/xxdMPgg',
            image: todo,
            title: 'To-Do App'
        },
        {
            link: 'https://survey-form.herokuapp.com/',
            image: form,
            title: 'Survey-Form'
        },
        {
            link: 'https://art-shirts.herokuapp.com/',
            image: art,
            title: 'Shirts'
        },
        {
            link: 'https://fathomless-springs-64134.herokuapp.com/',
            image: '',
            title: 'Design'
        }
    ];

    return (
        <div className='portfolio' id='portfolio'>
            <div className='title py-5'>
                <h2 className='display-3' data-aos='zoom-in'>Portfolio</h2>
                <div className='bar-h2' data-aos='zoom-in'></div>
            </div>
            <div className='listProjects d-flex flex-row flex-wrap justify-content-evenly mx-auto my-0 pb-5 col-10'>
            {list.map(item => (
                <EachProject link={item.link}
                            image={item.image}
                            title={item.title}
                            key={item.title}
                />
            ))}
            </div>
        </div>
    )
}
