import React from 'react';
import Course from './components/course';
const App = () => {
  const courses = [
    {
      name: "Half Stack Application Development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2
        }
      ]
    }
  ];

  let courseMap = courses.map(course => <Course course={course} />)

  return (
      <div>
          <h1>
              Web Development Curriculm
              {courseMap}
          </h1>
      </div>
  )
  }
export default App;
