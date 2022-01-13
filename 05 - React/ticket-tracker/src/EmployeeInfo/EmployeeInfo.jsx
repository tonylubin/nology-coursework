import React from 'react'
import styles from './EmployeeInfo.module.scss';

const EmployeeInfo = (props) => {
    return (
        <section className={styles.employeeInfo}>
            <p className={styles.fullName}>{props.name}</p>
            <p className={styles.role}>{props.role}</p> 
        </section>
    )
}

export default EmployeeInfo
