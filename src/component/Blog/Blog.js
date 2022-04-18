import React from 'react';
import { Link } from 'react-router-dom';
import details1 from '../../img/blog/blog-1.jpg'
import details2 from '../../img/blog/blog-2.jpg'
import detailsPng from '../../img/blog/details/quote-left.png'
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <section class="blog-details-hero set-bg-15">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 p-0 m-auto">
                            <div class="bh-text">
                                <h3>Workout nutrition explained. What to eat before, during, and after exercise.</h3>
                                <ul>
                                    <li>by Admin</li>
                                    <li>Apr,18, 2022</li>
                                    <li>20 Comment</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section class="blog-details-section spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 p-0 m-auto">
                            <div class="blog-details-text">
                                <div class="blog-details-title">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua accusantium doloremque laudantium. Excepteur
                                        sint occaecat cupidatat non proident sculpa .</p>
                                    <p>laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit
                                        amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat anim id est laborum.</p>
                                    <h5>You Can Buy For Less Than A College Degree</h5>
                                    <p>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur officia deserunt mollit.
                                    </p>
                                </div>
                                <div class="blog-details-pic">
                                    <div class="blog-details-pic-item">
                                        <img src={details1} alt="" />
                                    </div>
                                    <div class="blog-details-pic-item">
                                        <img src={details2} alt="" />
                                    </div>
                                </div>
                                <div class="blog-details-desc">
                                    <p>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                                <div class="blog-details-quote">
                                    <div class="quote-icon">
                                        <img src={detailsPng} alt="" />
                                    </div>
                                    <h5>The whole family of tiny legumes, whether red, green, yellow, or black, offers so many
                                        possibilities to create an exciting lunch.</h5>
                                    <span>MEIKE PETERS</span>
                                </div>
                                <div class="blog-details-more-desc">
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                        in. . Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                                    <p>laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit
                                        amet, consectetur adipisicing elit, sed eiusmod tempor incididunt laboris nisi ut
                                        aliquip commodo consequat. Class aptent taciti sociosqu ad litora torquent per conubia
                                        nostra, per inceptos himenaeos. Mauris vel magna ex. Integer gravida tincidunt accumsan.
                                        Vestibulum nulla mauris, condimentum id felis ac, volutpat volutpat mi qui dolorem.</p>
                                </div>
                                <div class="blog-details-tag-share">
                                    <div class="tags">
                                        <Link to="/">Body buiding</Link>
                                        <Link to="/">Yoga</Link>
                                        <Link to="/">Weightloss</Link>
                                        <Link to="/">Streching</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;