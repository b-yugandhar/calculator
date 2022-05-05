import React, { useState } from 'react'
import './App.css'
const App =()=>{
    const [data,setData] =useState("hi")
    const changehandler = e =>{
        setData(data.concat(e.target.name))
    }
    const clearhandler =e =>{
      setData("")
    }
    const backhandler =e=>{
      setData(data.slice(0,-1))
    }
    const resulthandler=e=>{
      setData(eval(data).toString());
    }
    return(
      <div  className='container'>
          <h1>CALCULATOR</h1>
        <form >
          <input id='inputbar' type="text" value={data}/>
        </form>

        <div className="keyboard">
          <button onClick={clearhandler} id='clear'>clear</button>
          <button id='color' onClick={backhandler}>C</button>
          <button id='color' onClick={changehandler} name='/' >%</button>

          <button onClick={changehandler} name="1">1</button>
          <button onClick={changehandler} name='2'>2</button>
          <button onClick={changehandler} name='3'>3</button>
          <button onClick={changehandler} id='color' name='+'>+</button>
          <button onClick={changehandler} name='4'>4</button>
          <button onClick={changehandler} name='5'>5</button>
          <button onClick={changehandler} name='6'>6</button>
          <button onClick={changehandler} id='color' name='-'>-</button>
          <button onClick={changehandler} name='7'>7</button>
          <button onClick={changehandler} name='8'>8</button>
          <button onclick={changehandler} name='9'>9</button>
          <button onClick={changehandler} id='color' name='*'>*</button>
          <button onClick={changehandler} id='color' name='.'>.</button>
          <button onClick={changehandler} name='0' >0</button>
          <button onClick={resulthandler}  id='result'>=</button>
          
         
        </div>
      </div>
    )
}

export default App