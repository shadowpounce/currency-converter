import React from 'react'
import CourseCard from '../UI/CoursCard/CoursCard'

const Course = ({ currency, rate }) => {
  return <CourseCard rate={rate} currency={currency} />
}

export default Course
