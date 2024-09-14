import React from 'react'
import styles from './index.module.css'
const Button = ({ value }) => {
    return (
        <div className={styles.btn1}>
            {value}
        </div>
    )
}

export default Button