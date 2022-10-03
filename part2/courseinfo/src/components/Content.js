import React from 'react'

const Content = ({parts}) => parts.map(part => <p key = {part.id}>{part.name} : {part.exercises}</p>)

export default Content