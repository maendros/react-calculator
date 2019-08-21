import React from 'react';

const Button = ({value,handleClick}) => (
        
        <button onClick={() => handleClick(value)}>{value}</button>
        
    )


export default Button