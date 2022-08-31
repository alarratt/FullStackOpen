const Course = ({course}) => {
  /*console.log("TEST",course)*/
  return(
    <div>
      {course.map(course => <h1 key = {course.id}>{course.name}</h1>)}</div>
/*      {course.parts.map(parts=><p key = {parts.id}>{parts.name}: {parts.exercises}</p>)}
      <h2>There are {course.parts.reduce(((total,current)=> total+current.exercises), 0)} exercises.</h2>
    </div>*/

  )
}
const App = (props) => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course course={courses} />
}
export default App