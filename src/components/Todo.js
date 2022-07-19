import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { AddTodo, deleteTodo, removeTodo } from "../actions/index";

const Todo = () => {
  const [inputData, setInputData] = useState('')
  const list = useSelector((state) => state.reducers.list);
  const dispatch = useDispatch();
  const submitData=() =>{
    dispatch(AddTodo(inputData))
    setInputData('')
  }
  const deleteAll=()=>{
    dispatch(removeTodo())
  }
  return (
      <div className='main-div'>
        <div className='child-div'>
        <h2>Add Your List Here</h2>

          <div className='Add Items'>
            <input type="text" placeholder='Add items'
              value={inputData}
              onChange={(event) => setInputData(event.target.value)} />
            <i className='fa fa-plus ass-btn' onClick={submitData}> </i>
          </div>
          

          <div className="showItem">
            {
              list.map((elem,i) => {
                return (

                <div classname="eachItem" key={elem.id}>
                  <h3><span>{i+1}</span> {elem.data}</h3>
                  <div className='todo-btn'>
                  <i className='fa fa-trash-alt add-btn' title="Delete Item" onClick={() => dispatch(deleteTodo(elem.id))}> </i>
                </div>
                </div>
              )
                })
              }
          </div>
          
          <div className="showItem">
            <button className='btn effect04' data-sm-link-text="remove all" onClick={deleteAll}><span>delete list</span></button>
      </div>
      </div>
      </div>
    )
  }
  
    
  
export default Todo;