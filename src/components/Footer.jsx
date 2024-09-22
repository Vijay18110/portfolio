import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div style={{ minWidth: "400px" }} className='row row3  mt-5'>
            <div className="col row3col">
                <div className="h3 text-white me-4 mt-3">VIJAY RAJ</div>
                <div className='text-secondary d-flex  mt-3'>

                    <Link to="/home"><li className='me-4 d-inline-block'> home </li></Link>
                    <Link to="/about"> <li className=' me-4 d-inline-block'> about</li></Link>
                    <Link to="/project"> <li className=' me-4 d-inline-block'>project</li></Link>
                    <Link to="/contact"> <li className=' me-4 d-inline-block'> contact</li></Link>
                    <Link to="/skill">  <li className=' me-4 d-inline-block'> skills</li></Link>
                    <Link to="/education"> <li className='me-4 d-inline-block'> education</li></Link>
                </div>
                <div className='mt-5 mb-5'> <span className='text-secondary'>© All rights reserved by</span> <span className='text-primary'>@VIJAY RAJ</span></div>
            </div>
        </div>
    )
}

export default Footer