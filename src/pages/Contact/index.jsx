import React, { useRef } from 'react'
import Nav from '../../components/Navrbar/Nav'
import './index.css';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaEnvelope } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import Footer from '../../components/Footer'
import icon from '../../assets/icon2.png'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/ReactToastify.css'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const form = useRef();
    const formname = useRef();
    const formsubject = useRef();

    const formemail = useRef();
    const formmessage = useRef();
    const handlevalidastion = () => {
        if (formname.current.value === "") {
            toast.error('enter name',
                {
                    autoClose: 8000,
                    position: "bottom-right",
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",
                })
            return false;
        }
        if (formsubject.current.value === "") {
            toast.error('enter subject',
                {
                    autoClose: 8000,
                    position: "bottom-right",
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",
                })
            return false;
        }
        if (formemail.current.value === "") {
            toast.error('enter email',
                {
                    autoClose: 8000,
                    position: "bottom-right",
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",
                })
            return false;
        }
        if (formmessage.current.value == "") {
            toast.error('enter some message that you want to send',
                {
                    autoClose: 8000,
                    position: "bottom-right",
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",

                })
            return false;
        }

        return true;
    }
    const sendEmail = (e) => {


        e.preventDefault();
        if (handlevalidastion()) {


            emailjs
                .sendForm('service_yqnfozs', 'template_1oehsf6', form.current, {
                    publicKey: 'pqVnxDwAi-0yKGPYg',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        alert("email send");
                        e.target.reset();
                    },

                    (error) => {
                        console.log('FAILED...', error.text);
                        alert("some error may occurr please make sure your internet connection stablished:")



                    },

                )
        }
    }
    return (
        <>
            <Nav ></Nav>
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col-md-4 mb-3">
                        <div className="h6 text-white mb-4">CONTACT INFO</div>
                        <div className='d-flex'>
                            <i className='me-3 mt-2'>
                                <div style={{ width: "70px", height: "70px" }} className="col2row1col1container1rowcol"><i className='text-black'>   <FaEnvelope></FaEnvelope></i></div>

                            </i>
                            <div>
                                <div className='text-secondary'>MAIL US </div>
                                <div className=' fs-5 text-white'>vijay9628554907@gmail.com</div>
                                <div className=' fs-5 text-white'>
                                    support@vr.com</div>
                            </div>
                        </div>


                        <div className='d-flex mt-5'>
                            <i className='me-3 mt-2'>
                                <div style={{ width: "70px", height: "70px" }} className="col2row1col1container1rowcol"><i className='text-black'>  <FaWhatsappSquare></FaWhatsappSquare></i></div>

                            </i>
                            <div>
                                <div className='text-secondary'>CONTACT US </div>
                                <div className=' fs-5 text-white'>
                                    +91 9628554907</div>
                            </div>
                        </div>



                        <div className='d-flex mt-5'>
                            <i className='me-3 mt-2'>
                                <div style={{ width: "70px", height: "70px" }} className="col2row1col1container1rowcol"><i className='text-black'>  <IoLocationSharp></IoLocationSharp></i></div>

                            </i>
                            <div>
                                <div className='text-secondary'>
                                    LOCATION

                                </div>
                                <div className=' fs-5 text-white'>
                                    bkt (226201), Lucknow ,
                                </div>
                                <div className=' fs-5 text-white'>
                                    Uttar Pradesh (INDIA)

                                </div>
                            </div>
                        </div>
                        <div className="h6 mt-5 text-white">SOCIAL INFO</div>
                        <div className='d-flex nv'>
                            <div className='d-flex text-white ms-2'>
                                <div style={{ width: "70px", height: "70px" }} className="col2row1col1container1rowcol"><i> <FaSquareInstagram></FaSquareInstagram></i></div>
                                <div style={{ width: "70px", height: "70px" }} className=" col2row1col1container1rowcol"> <i><FaLinkedin></FaLinkedin></i></div>
                                <div style={{ width: "70px", height: "70px" }} className=" col2row1col1container1rowcol"> <i><CiTwitter></CiTwitter></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md ms-4 contactcol2">
                        <div className='container'>
                            <div className="row mt-5">
                                <div className="col h2 text-white">
                                    Let's work together.</div>
                                <div className="col text-end text-white">
                                    <img src={icon} alt="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <form action="" ref={form} className='form mt-4' onSubmit={(e) => sendEmail(e)}>
                                        <div>
                                            <input ref={formname} placeholder='Name' style={{ backgroundColor: "rgba(20,20,20,1)", outline: "none", border: "none" }} type="text" className='input1 p-3 mb-3 ' />
                                        </div>
                                        <div className='mt-3'>
                                            <input ref={formemail} type="text" style={{ backgroundColor: "rgba(20,20,20,1)", outline: "none", border: "none" }} placeholder='email *' className='p-3 mb-3 input1' />
                                        </div>
                                        <div className='mt-3'>
                                            <input ref={formsubject} type="text" style={{ backgroundColor: "rgba(20,20,20,1)", outline: "none", border: "none" }} placeholder='your subject *' className='p-3 mb-4 input1' />
                                        </div>
                                        <div className='mt-3'>
                                            <textarea ref={formmessage} rows={5} cols={5} type="text" style={{ backgroundColor: "rgba(20,20,20,1)", outline: "none", border: "none" }} placeholder='your message *' className='p-3 mb-3 input1' />
                                        </div>
                                        <div className='mt-3'>
                                            <input type="submit" style={{ backgroundColor: "rgba(20,20,20,1)", outline: "none", border: "none" }} className='text-white  p-3 w-25  mb-3 btn' />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Footer></Footer>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </>

    )
}

export default Contact