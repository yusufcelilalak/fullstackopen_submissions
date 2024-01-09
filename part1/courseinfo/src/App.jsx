import Content from "./Content"
import Header from "./Header"
import Total from "./Total"

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const total = course.parts.reduce((n, part)=>{
    return n + part.exercises;
  },0);

  return (
    <div>
      <Header courseName={course.name}/>
      <Content parts={course.parts} />
      <Total total={total}/>
    </div>
  );
}

export default App;
