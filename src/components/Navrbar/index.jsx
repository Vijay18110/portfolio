import React, { useState } from 'react'
import Button from '../../widgets/button'
import { Link, useLocation } from 'react-router-dom'
import styles from './index.module.css'
import { FaBars } from "react-icons/fa";

const Nav = () => {
    const [class1, setClass1] = useState(styles.active)
    const { pathname } = useLocation()
    console.log(pathname)
    return (
        <>
            <div className={styles.navcont}>
                <ul>
                    <li className={pathname === "/home" ? { class1 } : {}} > <Link to="/home">Home</Link> </li>
                    <li className={pathname === "/about" ? { class1 } : {}}>   <Link to="/about">About</Link> </li>
                    <li className={pathname === "/skill" ? { class1 } : {}} ><Link to="/skill">Skills</Link>  </li>
                    <li className={pathname === "/project" ? { class1 } : {}}><Link to="/project">Project</Link> </li>
                    <li className={pathname === "/education" ? { class1 } : {}}><Link to="/education">Education</Link> </li>
                    <li className={pathname === "/contact" ? { class1 } : {}} ><Link to="/contact">contact</Link> </li>
                </ul >
                <div className={styles.bar}><i> <FaBars></FaBars></i></div>
                <div className={styles.sidebar}></div>
                <div className={styles.btncont}>
                    <Button value="Lets Start"></Button>
                </div>
            </div >

        </>



    )
}

export default Nav