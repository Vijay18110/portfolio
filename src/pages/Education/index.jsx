import React from 'react'
import Nav from '../../components/Navrbar'
import styles from "./index.module.css"
import Educard from '../../components/educard'
import Footer from '../../components/Footer'
const Education = () => {
    return (
        <>
            <Nav></Nav>
            <div className={styles.educationcont}>
                <h1>Education & Experience</h1>
            </div>
            <div className={styles.cardcont}>
                <Educard year="2021-present" course="B.tech (Information Tectnology)" uname="Dr. APJ Abdul Kalam technical univercity"></Educard>
                <Educard year="2019-2021" course="Itermediate" uname="ok kamal bublic school lalpur bazar (sitapur)"></Educard>
                <Educard year="2017-2019" course="Matriculation" uname="ok kamal bublic school lalpur bazar (sitapur)"></Educard>
                <h1>Experience</h1>
                <Educard year="3 months" course="Traning (Mern Stack)" uname="Zn infotech (lucknow)"></Educard>
                <Educard year="9 months" course="internship (Mern Stack)" uname="Skyview Smart Solution, Lucknow, UP July 2024 - march 2024"></Educard>
            </div >
            <div className={styles.footercont}>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Education