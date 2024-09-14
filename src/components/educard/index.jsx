import React from 'react'
import styles from "./index.module.css"
import Button from '../../widgets/button'
const Educard = ({ course, uname, year }) => {
    return (
        <div className={styles.cardcont}>
            <span className={styles.year}><Button value={year} >  </Button></span>
            <span className={styles.course}> {course} </span>
            <span className={styles.uname}> {uname} </span>
        </div>
    )
}

export default Educard