import React from 'react'
import '../index.css';

function Covid(props) {
    return (

           <div className='my-3'>
               <div className="card" style={props.style}>
                    <div className="card-body">
                        <h5 className="card-title"><span>{props.title}</span>{props.mainTitle}</h5>
                        <p className="card-text">{props.data}</p>
                    </div>
                </div>
          </div>

    )
}

export default Covid
