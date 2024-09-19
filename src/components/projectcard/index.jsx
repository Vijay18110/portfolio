import React from 'react'
import styles from './index.module.css'
import Button from '../../widgets/button'

const ProjCarc = ({ name, tech, img, link }) => {
    return (
        <>
            <div className={styles.projcardcont}>
                <img src={img} alt="project" />
                <a href={link}><div className={styles.btncard}><Button value="visit"></Button></div></a>
                <div className={styles.aboutprojectonhover}>
                    <div>{name}</div>
                    <div>{tech}</div>
                </div>
            </div>
        </>
    )
}

export default ProjCarc