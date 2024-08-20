import React from 'react'
import './middle.css'
import sign from '../../assets/sign.png'
import logo from '../../assets/Anime.png'
import curri from '../../assets/curriculum-viteimg.png'
import icon2 from '../../assets/icon2.png'
import { FaCamera } from "react-icons/fa";
import { IoPricetagsOutline } from "react-icons/io5";
import { GiProgression } from "react-icons/gi";
import { PiLinktreeLogoBold } from "react-icons/pi";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Footer from '../Footer'
const Middle = () => {
    return (
        <div className='container mt-5 maincontainer text-white'>
            <div className="row">
                <div className="col-md me-4 ps-2 row1col1">
                    <div className="container m-5" >
                        <div className="row">
                            <div className="col-md-6 p-0 row1col1col1">
                                <img src={"/vijaypic.jpg"} alt="pic" />
                            </div>
                            <div className="col-md-6 col1col1">
                                <p> UI/UX designer</p>
                                <h4> Vijay raj</h4>
                                <p> I am a UI/UX Designer based in INDIA.</p>
                                <i><PiLinktreeLogoBold></PiLinktreeLogoBold></i>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="row">
                        <div className="col  col2row1">
                            <marquee behavior="" direction="">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quasi repellat, numquam architecto
                                laudantium adipisci aspernatur
                                molestias voluptatibus velit pariatur ab?
                            </marquee>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md me-4 col2row1col1">
                            <div className="row">
                                <div className="col">
                                    <img src={sign} alt="" />
                                </div>
                                <div className="container">
                                    <div className='row col2row1col1row2'>
                                        <div className="col">

                                            <div className='text-secondary '> SHOWCASE</div>
                                            <div className='text-white'> Projects</div>
                                        </div>
                                        <div className="col  pt-3 text-center">
                                            <i><PiLinktreeLogoBold></PiLinktreeLogoBold></i>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md col2row1col2 col2row1col1">
                            <div className="row">
                                <div className="col text-center">
                                    <img src={logo} alt="" />
                                </div>
                                <div className="container ">
                                    <div className='row col2row1col1row2'>
                                        <div className="col">

                                            <div className='text-secondary '> more aboutme</div>
                                            <div className='text-white'> Credentials</div>
                                        </div>
                                        <div className="col  pt-3 text-center">
                                            <i><PiLinktreeLogoBold></PiLinktreeLogoBold></i>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row mt-5">
                <div className="container">
                    <div className='row'>
                        <div className="col-md me-4 col2row1col1">
                            <div className="row">
                                <div className="col text-center mt-4 ">
                                    <img className='img' src={curri} alt="" />
                                </div>
                                <div className="container">
                                    <div className='row  col2row1col1row2'>
                                        <div className="col">

                                            <div className='text-secondary '> CV</div>
                                            <div className='text-white'> Download</div>
                                        </div>
                                        <div className="col  pt-3 text-center">
                                            <i><PiLinktreeLogoBold></PiLinktreeLogoBold></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md me-4 ps-2 middlerowcol1">
                            <div className="container">
                                <div className='row mt-5 mb-3'>
                                    <div className="col n middlerowcol1col">
                                        <ul className=' ms-5'>
                                            <li style={{ fontSize: "30px" }}><FaCamera></FaCamera></li>
                                            <li style={{ fontSize: "30px" }}><IoPricetagsOutline></IoPricetagsOutline></li>
                                            <li style={{ fontSize: "30px" }}><GiProgression></GiProgression></li>
                                            <li style={{ fontSize: "30px" }}><GiProgression></GiProgression></li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="row mt-5 mb-3">
                                    <div className="col">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md">
                                                    {/* <p className=' text-secondary'>
                                                        specialization </p>
                                                    <span className=''>
                                                        Services Offering</span> */}
                                                    <div className='text-secondary'> specialization</div>
                                                    <div className='text-white'> Services Offering</div>

                                                </div>
                                                <div className="col-md text-center x">
                                                    <i><PiLinktreeLogoBold></PiLinktreeLogoBold></i>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md col2row1col1">
                            <div className="container mt-3">
                                <div className="row">
                                    <div className="col ms-3">
                                        <div className='col2row1col1container1'>
                                            <div style={{ width: "70px", height: "70px" }} className="col2row1col1container1rowcol"><i> <FaSquareInstagram></FaSquareInstagram></i></div>
                                            <div style={{ width: "70px", height: "70px" }} className=" col2row1col1container1rowcol"> <i><FaLinkedin></FaLinkedin></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container mt-3">
                                <div className='row  col2row1col1row2'>
                                    <div className="col">

                                        <div className='text-secondary '> STAY WITHME</div>
                                        <div className='text-white'> Profiles</div>
                                    </div>
                                    <div className="col  pt-3 text-center">
                                        <i><PiLinktreeLogoBold></PiLinktreeLogoBold></i>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5 row2">
                <div className="col-md me-4 col1">
                    <div className="row col1row">
                        <div className="col-md  m-4 p-3 col1rowcol1">
                            <h1>0</h1>
                            <p className='text-secondary'>years experience</p>
                        </div>
                        <div className="col-md p-3  m-4 col1rowcol1">
                            <h1>+20</h1>
                            <p className=' text-secondary'>clients worldwide</p>
                        </div>
                        <div className="col-md p-3 m-4 col1rowcol1">
                            <h1>+10</h1>
                            <p className='text-secondary'>total projects</p>
                        </div>
                    </div>
                </div>
                <div className="col-md col1 col2">
                    <div className="row">
                        <img className='' src={icon2} alt="pic" />
                    </div>
                    <div className="row mb-4">
                        <div className="col">
                            <div className='h1'>   Let's</div>
                            <div className='h1'><span>work</span> <span className='text-primary'>together .</span></div>
                        </div>
                    </div>

                </div>

            </div>

            <Footer></Footer>
        </div >
    )
}
export default Middle