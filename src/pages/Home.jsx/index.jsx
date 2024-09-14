import React from 'react'
import Nav from '../../components/Navrbar'
import styles from './index.module.css'
import Footer from '../../components/Footer'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaEnvelope } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <>
            <Nav></Nav>
            <div className={styles.cont}>
                <div className={styles.imgcont}>
                    <img src="vijaypic.jpg" alt="" />
                </div>
                <div className={styles.right}>
                    <div className={styles.marquee}>
                        <marquee>
                            I'm Vijay Raj.React.Js And node.js Developer With Skills And Excellent Working Knowledge Of Frontend and backend Technologies And Having A Commitment To Keep Up To Date With The Latest Technologies. Seeking A Challenging Job In The Field Of Frontend and backend Developer (node.js And React Native) Where I Can Use My Skills For The Growth Of An Organisation And Ready To Help Teammates To Achieve Company Goals
                        </marquee>
                    </div>
                    <div className={styles.about}>
                        <h1>about</h1>
                        <h3>Hello I'm web developer</h3>
                        <h6> A Indian based <strong>MERN</strong> Stack & App Developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent web apps that improves the lives of those around me.</h6>
                    </div>

                </div>
            </div>

            <div className={styles.heading}>   <h1>socil media</h1></div>
            <div className={styles.iconlinkscont}>
                <Link to="https://www.linkedin.com/in/vijay-raj-b24325310"><i className={styles.iconlinks}> <FaLinkedin></FaLinkedin></i></Link>
                <Link>   <i className={styles.iconlinks}><CiTwitter></CiTwitter></i></Link>
                <Link to="https://www.instagram.com/its.me_vijayraj/">     <i className={styles.iconlinks}><FaSquareInstagram></FaSquareInstagram></i> </Link>
                <Link to="https://github.com/vijay18110/">     <i className={styles.iconlinks}><FaGithub></FaGithub></i> </Link>
            </div>
            <div className={styles.footercont}>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Home
