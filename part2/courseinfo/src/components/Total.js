import React from 'react'

const Total = ({parts}) => <h4>Total Exercises: {parts.reduce((sum,part) => sum+part.exercises, 0)}</h4>
export default Total