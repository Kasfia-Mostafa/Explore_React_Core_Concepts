import React, { useEffect } from 'react';
import './Sunglass.css';
import Watch from '../Watch/Watch';
import { add, multiply, divideTheFirstNumberByTheSecondNumber as divide } from '../../Utilites/calculate';
// import add from '../../Utilites/calculate';

const Sunglass = () => {
  const first = 55;
  const second = 199;
  const sum = add(first,second)
  const multi = multiply(first,second);
  const division = divide(first,second)

  useEffect()
  return (
    <div>
      <Watch></Watch>
    </div>
  );
};

export default Sunglass;