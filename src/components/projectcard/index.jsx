import React from 'react'
import styles from './index.module.css'
import Button from '../../widgets/button'

const ProjCarc = ({ name, tech, img }) => {
    return (
        <>
            <div className={styles.projcardcont}>
                <img src={img} alt="project" />
                <div className={styles.btncard}><Button value="visit"></Button></div>

                <div className={styles.aboutprojectonhover}>
                    <div>{name}</div>
                    <div>{tech}</div>
                </div>
            </div>
        </>
    )
}

export default ProjCarc