import { faCaretRight, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import bgimg1 from '../../../img/team/team-1.jpg'
import bgimg2 from '../../../img/team/team-2.jpg'
import bgimg3 from '../../../img/team/team-3.jpg'
import './About.css'

const About = () => {
    return (
        <div>
            <section className="breadcrumb-section set-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb-text">
                                <h2>About us</h2>
                            </div>
                        </div>
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


            <section className="aboutus-section">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 p-0">
                    <div className="about-video set-bg-two">
                        <Link to="https://www.youtube.com/watch?v=EzKkl64rRbM" className="play-btn video-popup"><i
                                > <FontAwesomeIcon icon={faCaretRight}></FontAwesomeIcon> </i></Link>
                    </div>
                </div>
                <div className="col-lg-6 p-0">
                    <div className="about-text">
                        <div className="section-title">
                            <span>About Us</span>
                            <h2>What we have done</h2>
                        </div>
                        <div className="at-desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                viverra maecenas accumsan lacus vel facilisis. aliquip ex ea commodo consequat sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="team-section spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="team-title">
                        <div className="section-title">
                            <span>Our Team</span>
                            <h2>TRAIN WITH EXPERTS</h2>
                        </div>
                        <Link to="/" className="primary-btn btn-normal appoinment-btn">appointment</Link>
                    </div>
                </div>
            </div>
            <div className="row">
                
                    <div className="col-lg-4">
                        <div className="ts-item set-bg4" >
                            <img src={bgimg1} alt="" />
                            <div className="ts_text">
                                <h4>Athart Rachel</h4>
                                <span>Gym Trainer</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="ts-item set-bg5" >
                            <img src={bgimg2} alt="" />
                            <div className="ts_text">
                                <h4>Athart Rachel</h4>
                                <span>Gym Trainer</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="ts-item set-bg6">
                            <img src={bgimg3} alt="" />
                            <div className="ts_text">
                                <h4>Athart Rachel</h4>
                                <span>Gym Trainer</span>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </section>


    <section className="banner-section set-bg-three py-5" >
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="bs-text">
                        <h2>registration now to get more deals</h2>
                        <div className="bt-tips">Where health, beauty and fitness meet.</div>
                        <Link to="/login" className="primary-btn  btn-normal">Appointment</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
};

export default About;