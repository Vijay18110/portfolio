import React from 'react'
import styles from './index.module.css'
const Skillcard = ({ logo, name }) => {
    return (
        <div className={styles.Skillcardcont}>
            <div className={styles.imgcont}>
                <img style={{ width: "100px", height: "100px" }} className='rounded-circle' src={logo} alt="" />
            </div>
            <div className={styles.name}>{name}</div>
        </div>
    )
}

export default Skillcard