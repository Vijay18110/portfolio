import React from 'react'
import Nav from '../../components/Navrbar'
import styles from './index.module.css'
import Skillcard from '../../components/Skillcard'
import Footer from '../../components/Footer'
const Skills = () => {
    return (
        <>
            <Nav></Nav>
            <div className={styles.heading}>
                <h1>Skills</h1>
            </div>
            <div className={styles.skillscont}>
                <Skillcard logo="react.png" name="React.js"></Skillcard>
                <Skillcard logo="nodejs.png" name="node.js"></Skillcard>
                <Skillcard logo="mongo.png" name="mongodb"></Skillcard>
                <Skillcard logo="npm.webp" name="npm"></Skillcard>
                <Skillcard logo="jquery.png" name="jquery"></Skillcard>
                <Skillcard logo="css.webp" name="css" ></Skillcard>
                <Skillcard logo="html.png" name="html"></Skillcard>
                <Skillcard logo="download.png" name="git"></Skillcard>
                <Skillcard logo="github.png" name="github"></Skillcard>
                <Skillcard logo="ds.png" name="DS"></Skillcard>
                <Skillcard logo="algo.jpeg" name="algorithm"></Skillcard>
                <Skillcard logo="bootstrap.jpeg" name="bootstrap"></Skillcard>
                <Skillcard logo="c.png" name="c lang"></Skillcard>
                <Skillcard logo="download.jpeg" name="express"></Skillcard>
                <Skillcard logo="reasoning.png" name="reasoning"></Skillcard>

            </div>
            <div className={styles.footercont}>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Skills