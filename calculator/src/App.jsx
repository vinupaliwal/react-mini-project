import React from 'react';
import {sum,sub,mult,div} from './Calc';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = ()=>{
    return(
    <>
    <ul className='container'>
     <li>The sum of number is {sum(40,5)} </li>
     <li>The sum of number is {sub(20,4)}</li>
     <li>The sum of number is {mult(30,4)} </li>
     <li>The sum of number is {div(20,5)} </li>
    </ul>
    
    </>
    );
}

export default App;