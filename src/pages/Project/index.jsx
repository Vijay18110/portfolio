import React from 'react'
import Nav from '../../components/Navrbar'
import styles from './index.module.css'
import Footer from '../../components/Footer'
import ProjCarc from '../../components/projectcard'
const Project = () => {
    return (
        <>
            < Nav ></Nav>
            <div className={styles.heading}>
                <h1>Projects</h1>
            </div>
            <div className={styles.Projectcont}>
                <ProjCarc name="Student greivance system with" img="Screenshot1.png" tech="react.js & node.js"></ProjCarc>
                <ProjCarc name="Student greivance system with" img="Screenshot1.png" tech="react.js & node.js"></ProjCarc>
                <ProjCarc name="Student greivance system with" img="Screenshot1.png" tech="react.js & node.js"></ProjCarc>
                <ProjCarc name="Student greivance system with" img="Screenshot1.png" tech="react.js & node.js"></ProjCarc>
                <ProjCarc name="Student greivance system with" img="Screenshot1.png" tech="react.js & node.js"></ProjCarc>
                <ProjCarc name="Student greivance system with" img="Screenshot1.png" tech="react.js & node.js"></ProjCarc>
                <ProjCarc name="Student greivance system with" img="Screenshot1.png" tech="react.js & node.js"></ProjCarc>
                <ProjCarc name="Student greivance system with" img="Screenshot1.png" tech="react.js & node.js"></ProjCarc>
                <ProjCarc name="Student greivance system with" img="Screenshot1.png" tech="react.js & node.js"></ProjCarc>
                <ProjCarc name="Student greivance system with" img="Screenshot1.png" tech="react.js & node.js"></ProjCarc>
                <ProjCarc name="Student greivance system with" img="Screenshot1.png" tech="react.js & node.js"></ProjCarc>
                <ProjCarc name="Student greivance system with" img="Screenshot1.png" tech="react.js & node.js"></ProjCarc>
                <ProjCarc name="Student greivance system with" img="Screenshot1.png" tech="react.js & node.js"></ProjCarc>
                <ProjCarc name="Student greivance system with" img="Screenshot1.png" tech="react.js & node.js"></ProjCarc>
                <ProjCarc name="Student greivance system with" img="Screenshot1.png" tech="react.js & node.js"></ProjCarc>
                <ProjCarc name="Student greivance system with" img="Screenshot1.png" tech="react.js & node.js"></ProjCarc>
                <ProjCarc name="Student greivance system with" img="Screenshot1.png" tech="react.js & node.js"></ProjCarc>
                <ProjCarc name="Student greivance system with" img="Screenshot1.png" tech="react.js & node.js"></ProjCarc>
                <ProjCarc name="Student greivance system with" img="Screenshot1.png" tech="react.js & node.js"></ProjCarc>
                <ProjCarc name="Student greivance system with" img="Screenshot1.png" tech="react.js & node.js"></ProjCarc>
                <ProjCarc name="Student greivance system with" img="Screenshot1.png" tech="react.js & node.js"></ProjCarc>
                <ProjCarc name="Student greivance system with" img="Screenshot1.png" tech="react.js & node.js"></ProjCarc>
            </div>
            <div className={styles.Footercont}>
                <Footer></Footer>
            </div>
        </>

    )
}

export default Project