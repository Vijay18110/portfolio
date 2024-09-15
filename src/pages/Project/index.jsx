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
                <ProjCarc name="Note app clone" img="noteapp clone.png" tech="react.js"></ProjCarc>
                <ProjCarc name="text-editor app with all functionality" img="Screenshot3.png" tech="react.js"></ProjCarc>
                <ProjCarc name="unbrew " img="Screenshot4.png" tech="react.js"></ProjCarc>
                <ProjCarc name="My portfolio website" img="Screenshot5.png" tech="react.js"></ProjCarc>
                <ProjCarc name="flipkart with all functionality with backend" img="Screenshot6.png" tech="react.js & node.js"></ProjCarc>
                <ProjCarc name="password generator of all charactor" img="Screenshot7.png" tech="react.js"></ProjCarc>
                <ProjCarc name="social-media app like instagram to create simple post" img="Screenshot8.png" tech="react.js"></ProjCarc>
                <ProjCarc name="todo app to maintain your routine" img="Screenshot9.png" tech="react.js"></ProjCarc>
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