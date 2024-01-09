import Content from "./Content"
import Header from "./Header"
import Total from "./Total"

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
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
  ];

  const total = parts.reduce((n, part)=>{
    return n + part.exercises;
  },0);

  return (
    <div>
      <Header courseName={course}/>
      <Content parts={parts} />
      <Total total={total}/>
    </div>
  );
}

export default App;
