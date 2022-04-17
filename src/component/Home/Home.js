import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faDumbbell, faEnvelope, faMapLocation, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import photoCalass01 from '../../img/classes/class-1.jpg'
import photoCalass03 from '../../img/classes/class-3.jpg'
import photoCalass04 from '../../img/classes/class-4.jpg'
import photoCalass05 from '../../img/classes/class-5.jpg'
import './Home.css';
import { Row } from 'react-bootstrap';
import useHook from '../../useHook/useHook';
import { Link } from 'react-router-dom';



const Home = () => {
    const [enroll] = useHook();

    

    return (
        <div>
            <section>
                <div className="banner text">
                    <div className="text-box w-50 text-white">
                        <span className='title-header'>Shape your Body</span>
                        <h1>Be <span style={{color: "#f36100"}}> Strong</span>  Training Hard</h1>
                    </div>
                </div>
            </section>

            <section className="choseus-section spad mb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title my-5 text-center">
                                <span className='color'>Why chose us?</span>
                                <h2 className='text-white'>PUSH YOUR LIMITS FORWARD</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                                <span><FontAwesomeIcon className='flaticon-034-stationary-bike' icon={faDumbbell}></FontAwesomeIcon></span>
                                <h4>Modern equipment</h4>
                                <p className='text-color'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    dolore facilisis.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                                <span><FontAwesomeIcon className='flaticon-034-stationary-bike' icon={faDumbbell}></FontAwesomeIcon></span>

                                <h4>Healthy nutrition plan</h4>
                                <p className='text-color'>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                                    facilisis.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                                <span><FontAwesomeIcon className='flaticon-034-stationary-bike' icon={faDumbbell}></FontAwesomeIcon></span>
                                <h4>Proffesponal training plan</h4>
                                <p className='text-color'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    dolore facilisis.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                                <span><FontAwesomeIcon className='flaticon-034-stationary-bike' icon={faDumbbell}></FontAwesomeIcon></span>
                                <h4>Unique to your needs</h4>
                                <p className='text-color'>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                                    facilisis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="classes-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Our Classes</span>
                                <h2>WHAT WE CAN OFFER</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="class-item">
                                <div className="ci-pic">
                                    <img src={photoCalass01} alt="" />
                                </div>
                                <div className="ci-text">
                                    <span>STRENGTH</span>
                                    <h5>Weightlifting</h5>
                                    <a href="/"><i><FontAwesomeIcon className='i' icon={faAngleRight}></FontAwesomeIcon></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="class-item">
                                <div className="ci-pic">
                                    <img src={photoCalass03} alt="" />
                                </div>
                                <div className="ci-text">
                                    <span>Cardio</span>
                                    <h5>Indoor cycling</h5>
                                    <a href="/"><i><FontAwesomeIcon className='i' icon={faAngleRight}></FontAwesomeIcon></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="class-item">
                                <div className="ci-pic">
                                    <img src={photoCalass03} alt="" />
                                </div>
                                <div className="ci-text">
                                    <span>STRENGTH</span>
                                    <h5>Kettlebell power</h5>
                                    <a href="/"><i><FontAwesomeIcon className='i' icon={faAngleRight}></FontAwesomeIcon></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="class-item">
                                <div className="ci-pic">
                                    <img src={photoCalass04} alt="" />
                                </div>
                                <div className="ci-text">
                                    <span>Cardio</span>
                                    <h4>Indoor cycling</h4>
                                    <a href="/"><i><FontAwesomeIcon className='i' icon={faAngleRight}></FontAwesomeIcon></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="class-item">
                                <div className="ci-pic">
                                    <img src={photoCalass05} alt="" />
                                </div>
                                <div className="ci-text">
                                    <span>Training</span>
                                    <h4>Boxing</h4>
                                    <a href="/"><i><FontAwesomeIcon className='i' icon={faAngleRight}></FontAwesomeIcon></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="pricing-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Our Plan</span>
                                <h2>Choose your pricing plan</h2>
                            </div>
                        </div>
                    </div>
                    <Row>


                        {
                            enroll.map(enrolls =>
                                <div key={enrolls.id} className="col-lg-4 col-md-8">
                                    <div className="ps-item">
                                        <h3>{enrolls.name}</h3>
                                        <div className="pi-price">
                                            <h2>$ {enrolls.price}</h2>
                                            <span>{enrolls.subName}</span>
                                        </div>
                                        <ul>
                                            <li>{enrolls.number01}</li>
                                            <li>{enrolls.number02}</li>
                                            <li>{enrolls.number03}</li>
                                            <li>{enrolls.number04}</li>
                                            <li>{enrolls.number05}</li>
                                            <li>{enrolls.number06}</li>
                                        </ul>
                                        <Link to='/order' className="primary-btn pricing-btn">Enroll now</Link>
                                        
                                    </div>
                                </div>
                            )
                        }
                    </Row>
                </div>
            </section>
            
        </div>
    );
};

export default Home;