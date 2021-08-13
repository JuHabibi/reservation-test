import React from 'react'

const Counter = ({ count, cat, handleClick }) =>

(
    <>
        <div>{cat.title}</div>
        <button className='dec-btn'>-</button>
        <span className='counter-area'>{count}</span>
        <button onClick={handleClick} className='inc-btn'>+</button>
    </>

)



export default Counter