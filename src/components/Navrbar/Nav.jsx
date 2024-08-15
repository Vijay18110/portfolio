import React from 'react'
import Button from '../../widgets/button/Button'
// import { Link } from 'react-router-dom'

const Nav = () => {
    return (

        <div className="container mt-0 pt-0">

            <div className="row  ">
                <div className=" text-start col-sm-2">
                    <img style={{ width: "100px", position: "relative", top: "-20px" }} nav src={"/vijay.png"} alt="" />
                </div>
                <div className="  col-sm-8 ">

                    <ul className='d-flex   justify-content-center gap-5  ' style={{ listStyleType: "none" }}>
                        <li style={{ color: "#676767" }}> <a to="#">Home</a> </li>
                        <li style={{ color: "#676767" }}> About </li>
                        <li style={{ color: "#676767" }}> Contact </li>
                        <li style={{ color: "#676767" }}> Works </li>
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