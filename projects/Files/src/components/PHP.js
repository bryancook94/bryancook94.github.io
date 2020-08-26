import React from "react";
import API  from './API.js';


const PHP = () => {
  const div={
    'display':'flex'
  }
  const a={
    'width':'50%'
  }
  const php={
    'height':'115px',
    'width':'100%',
    'backgroundPosition':'center',
    'backgroundSize':'cover',
    'backgroundImage':'url("https://newrelic.com/assets/pages/apm/php/php-elephant-logo-bd4f9d83be8c8563248fe4793f90bae7.png")'
  }
  const python={
    'height':'115px',
    'width':'100%',
    'backgroundSize':'contain',
    'backgroundRepeatX': 'no-repeat',
    'backgroundPositionX': 'center',
    'backgroundImage':'url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png")'
  }


  return (

      <div style={div}>

        <a href="https://github.com/bryancook94/RPI1_Data/blob/master/MorningDisplayV5/php/indexProcess2.php" style={a} download>
          <div className="php" style={php}> </div>
        </a>
        <a href="https://github.com/bryancook94/RPI1_Data/blob/master/MorningDisplayV5/python/motor.py" style={a} download>
          <div className="python" style={python}> </div>
          <API/>
        </a>

      </div>
  )

}


export default PHP
/*
<img src={media[index]} alt="image" width="100%"/>

*/
