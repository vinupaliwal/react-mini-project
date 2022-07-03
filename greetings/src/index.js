import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let currTime = new Date(2021,12,31,7);
currTime = currTime.getHours();
let greetings = '';
let currStyle={};
if(currTime>=1 && currTime<12)
{
  greetings="Good Morning";
  currStyle.color="green";
}
else if(currTime>=12 && currTime<19)
{
  greetings="Good Afternoon";
  currStyle.color="orange";
}
else
{
  greetings="Good Night";
  currStyle.color="black";
}

ReactDOM.render(
  <>
  <div>
 <h1>Hello Sir , <span style={currStyle}>{greetings}</span></h1>
 </div>
 </>,
  document.getElementById('root')
);


