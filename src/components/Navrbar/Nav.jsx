import React from 'react'
import Button from '../../widgets/button/Button'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const Nav = () => {
    return (

        <div className="container  pt-0">
            <div className="row  pt-3">
                <div className=" text-start col-sm-2">
                    <img style={{ width: "100px", position: "relative", top: "-10px" }} nav src={"/vijay.png"} alt="" />
                </div>
                <div className="  col-sm-8 n">
                    <ul className='d-flex   justify-content-center gap-5  ' style={{ listStyleType: "none" }}>
                        <li > <Link style={{ color: "#676767", textDecoration: "none" }} to="/home">Home</Link> </li>
                        <li style={{ color: "#676767" }}>   <Link style={{ color: "#676767", textDecoration: "none" }} to="/about">About</Link> </li>
                        <li style={{ color: "#676767" }}>  <Link style={{ color: "#676767", textDecoration: "none" }} to="/contact">Contact</Link>  </li>
                        <li style={{ color: "#676767" }}>   <Link style={{ color: "#676767", textDecoration: "none" }} to="/work">Works</Link> </li>
                    </ul>
                </div>
                <div style={{ position: "relative", top: "-10px" }} className="col-sm-2 pb-0 text-start">
                    <Button></Button>
                </div>
            </div>



        </div>
    )
}

export default Nav