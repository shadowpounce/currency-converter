import React from 'react'

import styles from './CoursCard.module.scss'

const CourseCard = ({ currency, rate }) => {
  return (
    <div className={styles.card}>
      <span>{currency}</span>
      <small>{rate.toFixed(2)} UAH </small>
    </div>
  )
}

export default CourseCard
