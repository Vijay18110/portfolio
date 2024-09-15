import React, { useState } from 'react'
import Button from '../../widgets/button'
import { Link, useLocation } from 'react-router-dom'
import styles from './index.module.css'
import { FaBars } from "react-icons/fa";

const Nav = () => {
    const [class1, setClass1] = useState(styles.a)
    const { pathname } = useLocation()


    return (
        <>
            <div className={styles.navcont}>
                <ul>
                    <li > <Link className={pathname === '/home' ? class1 : ""} to="/home">Home</Link> </li>
                    <li className={styles.active}>   <Link className={pathname === '/about' ? class1 : ""} to="/about">About</Link> </li>
                    <li className={styles.active} ><Link className={pathname === '/skill' ? class1 : ""} to="/skill">Skills</Link>  </li>
                    <li className={styles.active}><Link className={pathname === '/project' ? class1 : ""} to="/project">Project</Link> </li>
                    <li className={styles.active}><Link className={pathname === '/education' ? class1 : ""} to="/education">Education</Link> </li>
                    <li className={styles.active} ><Link className={pathname === '/contact' ? class1 : ""} to="/contact">Contact</Link> </li>
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