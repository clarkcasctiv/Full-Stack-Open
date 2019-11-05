import React from 'react';

const Total = ({ parts }) => {
    const total = parts.reduce((acc, curr)=>acc+curr.exercises, 0)
  return (
    <p>
      No. of Exercises {total}
    </p>
  );
};
export default Total;
