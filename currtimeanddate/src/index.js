import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const name="vinu";
const currDate=new Date().toLocaleDateString();
const currTime=new Date().toLocaleTimeString();
ReactDOM.render(
  <>
     <div>
    <h2>Hello,My name is {name}</h2>
    <p>The current Date is {currDate}</p>
    <p>The current time is {currTime}</p>
    </div>
  </>,
  document.getElementById('root')
);

