import React from 'react';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { addNumber,removeInput ,deleteValue,updateValue,change} from "./actions/Actions"



function App() {
  const {inputValue,allValues}= useSelector((state)=> state.inputReducer);
 
  const dispatch = useDispatch();
  console.log({allValues})
  return (
    <>
    <div className="App">
      <h1>TODO APP </h1>
      <input type="text" name='edit' className='addData'  value={inputValue} onChange={(e)=>dispatch(change(e.target.value))} />
    </div>
    <button onClick={ ()=>{
      if ( inputValue ){
        dispatch(addNumber(inputValue)) 
        dispatch(removeInput())
      }
    }}>Add</button>
    {
      allValues.map((item)=>{
        return(
          <ul key ={item.id}>
            <li>{item.addValue}</li>

{/* //delete// */}
            <button onClick={()=>{
            dispatch(deleteValue(item))

            }}>Delete</button>

{/* //update */}
            <button
              onClick={() => {
                   const updatedValue = prompt('Enter the updated value', item.addValue,item.id);
                   if (updatedValue !== null) {
                    const obj = { ...item, addValue: updatedValue }
                   dispatch(updateValue(obj));
                 
               }
              }}
            >
              Update
            </button>
          </ul>
          
        )
      })
    }
    </>
  );
}

export default App;
