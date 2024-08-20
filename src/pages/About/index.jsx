import React from 'react'
import Nav from '../../components/Navrbar/Nav'
import './index.css'
import star from '../../assets/star-2.png'
import icon from '../../assets/icon2.png'
import Card from './Card'
import Footer from '../../components/Footer'



const About = () => {
    return (
        <>
            <Nav></Nav>
            <div className="container mt-5">
                <div className="row" >
                    <div className=" col-md-4 me-2">
                        <div className='aboutrow1col1 p-1'>
                            <div className="col-md w-75 h-100 mx-auto row1col1col1 align-item-center m-3">
                                <img src={"/vijaypic.jpg"} alt="pic" />
                            </div>
                        </div>

                    </div>
                    <div className="col-md  aboutrow1col2">
                        <div className="row">
                            <div className="col">
                                <div className='d-flex ms-5 gap-2' >
                                    <img src={star} alt="" />
                                    <h1 className='text-white'>SELF-SUMMARY</h1>
                                    <img src={star} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="row mx-auto nnnnnn mt-3" >

                            <div className="row  col2row2">
                                <div className="row ps-5">
                                    <img style={{ width: "100px", height: "70px" }} src={icon} alt="" />
                                </div>
                                <div className="row ps-5 mt-5">
                                    <div className="h1 text-white">@Vijay raj</div>
                                    <p className="text-secondary">
                                        I am a INDIA-based UI UX designer with a focus on web design, illustration, a visual development. I have a diverse range of experience having worked across various fields and industries.

                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="row mt-4">
                    <div className="col-md">
                        <Card></Card>
                    </div>
                    <div className="col-md"><Card></Card></div>
                </div>
                <div className="row mt-3 ">
                    <div className="col aboutrow3col ps-4 pt-4 pb-4">
                        <div className="h6 text-white">
                            Certification
                        </div>
                        <div className=" text-primary fs-5">
                            Level Up Your CSS Animation Skills

                        </div>
                        <p className='text-secondary pb-2'>
                            Level Up Your CSS Animation Skills
                        </p>
                        <div className='text-primary fs-5'>
                            Complete Web & Mobile Designer in 2023: UI/UX, Figma
                        </div>
                        <p className='text-secondary pb-2'>
                            Instructed By: Andrei Neagoie, Daniel Schifano
                        </p>
                        <div className='text-primary fs-5'>
                            Diploma Course in Human Resource Management (HRM)

                        </div>
                        <p className='text-secondary'>
                            Instructed By: Akaaro Consulting and Training

                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Footer></Footer>
                    </div>
                </div>
            </div>
        </>

    )
}

export default About