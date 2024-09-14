import React from 'react'
import Nav from '../../components/Navrbar'
import './index.css'
import star from '../../assets/star-2.png'
import icon from '../../assets/icon2.png'
import Card from '../../components/Card'
import icon2 from '../../assets/icon2.png'
import sign from '../../assets/sign.png'
import Footer from '../../components/Footer'
import { PiLinktreeLogoBold } from "react-icons/pi";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaStarOfDavid } from "react-icons/fa6";
import Button from '../../widgets/button'
const About = () => {
    return (
        <>
            <Nav></Nav>
            <div className="container">
                <div className="container1">
                    <img src={"/vijaypic.jpg"} alt="pic" />
                    <div className="aboutrow1col2">
                        <div className='letftop' >
                            <i><FaStarOfDavid></FaStarOfDavid></i>
                            <h2 className='text-white'>SELF-SUMMARY</h2>
                            <i><FaStarOfDavid></FaStarOfDavid></i>
                        </div>
                        <div className="nnnnnn">
                            <div className="">
                                <img style={{ width: "100px", height: "70px" }} src={icon} alt="" />
                            </div>
                            <div className="">
                                <div className="h1 text-white">@Vijay raj</div>
                                <p className="text-white">
                                    I'm Vijay Raj.React.Js And node.js Developer With  Skills And Excellent Working Knowledge Of Frontend and backend Technologies And Having A Commitment To Keep Up To Date With The Latest Technologies. Seeking A Challenging Job In The Field Of Frontend and backend Developer (node.js And React Native) Where I Can Use My Skills For The Growth Of An Organisation And Ready To Help Teammates To Achieve Company Goals.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='project'>
                    <Button value="20+"></Button>
                    <h1>projects</h1>
                </div>
                <div className={"footercont"}>
                    <Footer></Footer>
                </div>
            </div>



        </>

    )
}

export default About