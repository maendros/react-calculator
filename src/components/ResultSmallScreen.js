import React from 'react';

const ResultScreen = ({resultValue,operator}) => {
    if (resultValue !== '' && operator !== '') {
        return <input className="result-small-screen" value ={resultValue +' '+ operator} disabled/>;
      } else {
          return <span></span>
      }
        
        
}


export default ResultScreen;