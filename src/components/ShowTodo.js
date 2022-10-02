import React from 'react'

import {RiDeleteBin6Line} from 'react-icons/ri'

function ShowTodo(props) {
  return (
    <div className='container container__list'>
      <div className="row my-2">

          <div className="col-11">
              <h6>{props.task}</h6>
          </div>
          <div className="col-1">
          <button className='btn btn-primary' onClick={()=>{
              props.onSelect(props.id)
          }}><RiDeleteBin6Line /></button>
          </div>
      </div>
      
  </div>
  )
}

export default ShowTodo
