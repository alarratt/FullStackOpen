
const Header = (props) => {
  return (
    <div>
      <h1>Course: {props.course}</h1>
    </div>
  )
} 
const Part = ({part}) => {
  console.log("Content "+part)
  return(
    <div>
      <p>{part.name} : {part.exercises}</p>
    </div>
  )
}
const Content = (contentProps) => {
  return (
  <div>
    <Part part = {contentProps.parts[0]} />
    <Part part = {contentProps.parts[1]} />
    <Part part = {contentProps.parts[2]} />
  </div>
  )
}
const Total = (props) => {
  return(
    <div>
      <p>Number of exercises: {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>
    </div>
  )
}

const App = (props) => {
  const course ={
    name: 'Half Stack application development',
    parts :[{name: 'Fundamentals of React', exercises: 10},
            {name: 'Using props to pass data', exercises: 7},
            {name: 'State of a component', exercises: 14}
            ]}
  return (
    <div>
      <Header course={course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
}
export default App