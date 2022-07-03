import React,{useState,useEffect} from 'react';
import Covid from './components/Covid';
import './index.css';


function App() {
    const [state, setstate] = useState([]);
   const getCovidData = async ()=>{
    try{
     const response = await fetch("https://data.covid19india.org/data.json");
     const actualData = await response.json();
     console.log(actualData.statewise[0]);
     setstate(actualData.statewise[0]);
    }
    catch(err){
      console.log(err);
    }
 }
    useEffect(() => {
        getCovidData();
    }, [])
    return (
        
        <div className='container my-5'>
           <div className='text-center my-2'>
               <h4>🔴LIVE</h4>
               <h2 className='mt-2'>COVID-19 CORONAVIRUS TRACKER</h2>
           </div>
           <div className='row text-center mt-1'>
               <div className='col-md-4 '>
                <div className='country'>
                   <Covid
                       style={{backgroundColor: "#44c5c9"}}
                       title = "OUR"
                       mainTitle="COUNTRY"
                       data = "INDIA"
                   />
                   </div>
               </div>
               <div className='col-md-4 recovered'>
                   <Covid
                       style={{backgroundColor: 'rgb(198, 231, 9)'}}
                       title = "TOTAL"
                       mainTitle="RECOVERED"
                       data = {state.recovered}
                   />
               </div>
               <div className='col-md-4 confirmed'>
                   <Covid
                       style={{backgroundColor: 'green'}}
                       title = "TOTAL"
                       mainTitle="CONFIRMED"
                       data = {state.confirmed}
                   />
               </div>
               <div className='col-md-4 deaths'>
                   <Covid
                        style={{backgroundColor: 'rgb(230, 135, 10)'}}
                       title = "TOTAL"
                       mainTitle="DEATHS"
                       data = {state.deaths}
                   />
               </div>
               <div className='col-md-4 active'>
                   <Covid
                       style={{backgroundColor: 'rgb(41, 135, 212)'}}
                       title = "TOTAL"
                       mainTitle="ACTIVE"
                       data = {state.active}
                   />
               </div>
               <div className='col-md-4 updated'>
                   <Covid
                       style={{backgroundColor: 'rosybrown' ,padding:'3px 40px'}}
                       title = "LAST"
                       mainTitle="UPDATED"
                       data = {state.lastupdatedtime}
                   />
               </div>
              
           </div>
        </div>
    )
}

export default App;
