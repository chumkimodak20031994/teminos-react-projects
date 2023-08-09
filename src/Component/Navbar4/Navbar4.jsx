import React from 'react';
import "./Navbar4.css";
import Repeat from '../Repeat/Repeat';



const Navbar4 = () => {
    return (
        <div>
            <div className='bg-light'>
                <nav className="navbar bg-body-tertiary text-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand">Temple University</a>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2 p-2 " type="search" placeholder="Search Dosen" aria-label="Search"></input>
                            <img className='pics' src="/assete/Rectangle.svg" alt="Bootstrap" width="30" height="24"></img>
                        </form>
                    </div>
                </nav>
            </div>


            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <ul className='home'>
                        <a className="nav-link disabled" aria-disabled="true">program/</a>
                        <a className="nav-link active" aria-current="page" href="#">
                            <span className='home2'>First Year Student</span>
                        </a>

                    </ul>
                </div>
            </nav>


            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <span className="navbar-text">First Year Student</span>

                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Overview</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Insights</a>
                            </li>
                            <li className="nav-item nav nav nav-underline">
                                <a className="nav-link active" aria-current="page" href="#"><span className='red'>Users</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Matches</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Setting</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>


            <div className="card text-bg-light m-0">
                <div className='btn-cls'>
                    <button type="button" className="btn-close float-end m-4" aria-label="Close"></button>
                </div>
            </div>
            <div className='m-0 p-2'>
                <div className="card text-bg-light">
                    <img src="/assete/headerbg.svg" className="card-img" alt="..."></img>
                    <div className="card-img-overlay d-flex">
                        <h5 className="card-title">
                            <img className='pic' src="/assete/Rectangle (1).svg" alt="Bootstrap" width="50" height="64"></img>
                        </h5>

                        <p className="card-text m-4 w-full"><span className='card-tex'>Jonathan Javelle</span>
                            <span><p className='jon'>Jonathan @ gmail.com +1 123-456-789</p></span>
                        </p>



                        <a href=''><button className='m-4 br-4 text-primary border border-primary'>student</button></a>

                        <a href="" className='button-set'> <button type="button" className="btn btn-primary h-20  w-70">Public Profile</button></a>
                    </div>
                </div>
                <div className="card text-center m-0 bg-white">
                    <ul className="nav nav-pills card-header-pills">
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Major</a>
                            <span>Digital Media</span>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">year</a>
                            <span>2016</span>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Country</a>
                            <span>Ireland</span>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Role</a>
                            <span>Mentee</span>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Gender</a>
                            <span>Male</span>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Dob</a>
                            <span>04/13/1985</span>
                        </li>

                    </ul>
                </div>

                <div className='card text-center m-0 bg-white m-0'>
                    <ul className="nav nav-pills m-0 h-25 bg-white">

                        <li className="nav-item">
                            <h4>Pograms</h4>
                            <div className="button">
                                <button type="button" className="btn btn-primary g-col-6 m-2">First year Student</button>
                                <button type="button" className="btn btn-primary rounded-pill">mba</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="card text-center bg-white m-2">
                <div>
                    <h4 className='profile'>profile infirmation</h4>
                </div>

                <div className="card-header bg-white">

                    <ul className="nav nav-pills card-header-pills">

                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Studebt number</a>
                            <span>10123</span>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Deperment</a>
                            <span>Design</span>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Year</a>
                            <span>2016</span>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">User Type</a>
                            <span>Student</span>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">College</a>
                            <span>College of arts and science</span>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Minor</a>
                            <span>Computer Science</span>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Length of course</a>
                            <span>4 years</span>
                        </li>
                    </ul>
                </div>
                <div className="card text-center M-5">
                    <div className="card-header bg-white">
                        <ul className="nav nav-pills card-header-pills">
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">pogram types</a>
                                <span>Carear</span>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">onbording status</a>
                                <span>invites</span>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Linkedin url
                                </a>
                                <span>
                                    <img className='pic' src="/assete/link.png" alt="Bootstrap" width="10" height="10"></img>
                                </span>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Dosen Url</a>
                                <img className='pic' src="/assete/image 14 (1).svg" alt="Bootstrap" width="15" height="15"></img>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >


    );
};

export default Navbar4;