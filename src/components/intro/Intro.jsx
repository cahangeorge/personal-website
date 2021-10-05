import { Component } from 'react';
import { init } from 'ityped';
import Particles from "react-tsparticles";
import { BsChevronDoubleDown } from "react-icons/bs";
import './intro.scss';

export default class Intro extends Component {
    componentDidMount() {
        const myElement = document.querySelector('#myElement');
        init(myElement, {
                            showCursor: false,
                            strings: ['Welcome to my page!!!', 'I am Cahan George.', 'I am a Front-End Developer, Web Designer and Content Creator'],
                            backDelay: 1500,
                            backSpeed: 60
        })
    }

    render(){
        return(
            <div className="intro position-relative" id="intro" data-aos='zoom-in'>
                    <h1 id="myElement" className='position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center text-center shadow m-0 mx-auto p-3 col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7'></h1>
                    <div className="scroll-down position-absolute bottom-0 start-50 translate-middle-x d-flex flex-column align-items-center justify-content-center">
                        <p>Scroll Down!</p>
                        <BsChevronDoubleDown className='icon-down' />
                    </div>
                    <Particles
                        id="tsparticles"
                        options={{
                            background: {
                                color: {
                                value: "#F6F5F5",
                                },
                            },
                        fpsLimit: 60,
                        interactivity: {
                            detectsOn: "canvas",
                            events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                            },
                            modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                            },
                        },
                        particles: {
                            color: {
                            value: "#276678",
                            },
                            links: {
                            color: "#276678",
                            distance: 150,
                            enable: true,
                            opacity: 0.25,
                            width: 0.5,
                            },
                            collisions: {
                            enable: true,
                            },
                            move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 4,
                            straight: false,
                            },
                            number: {
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                            value: 25,
                            },
                            opacity: {
                            value: 0.5,
                            },
                            shape: {
                            type: "circle",
                            },
                            size: {
                            random: true,
                            value: 5,
                            },
                        },
                        detectRetina: true,
                        }}
                    />
                </div>
        )
    }
}
