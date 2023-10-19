import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  //jscode
  const [Interest , SetInterest] = useState(0)
  const [Principle , SetPrinciple] = useState(0)
  const [Rate , SetRate] = useState(0)
  const [Year , SetYear] = useState(0)
  const [isPrinciple , SetIsPrinciple] = useState(true)
  const [isRate , SetIsRate] = useState(true)
  const [isYear , SetIsYear] = useState(true)
  const validate = (e)=>{
    const {name , value} = e.target
   /*  console.log(name , value); */
   /* console.log(!!value.match( /^[0-9]+$/)); */
    if(!!value.match( /^[0-9]*.?[0-9]+$/)){//!! - to convert into boolean value
      if(name==='principle'){
        SetPrinciple(value)
        SetIsPrinciple(true)
      }
      else if (name==='rate') {
        SetRate(value)
        SetIsRate(true)
      }
      else{
        SetYear(value)
        SetIsYear(true)
      }
    } 
    else{
      if(name==='principle'){
        SetPrinciple(value)
        SetIsPrinciple(false)
      }
      else if (name==='rate') {
        SetRate(value)
        SetIsRate(false)
      }
      else{
        SetYear(value)
        SetIsYear(false)
      }
    }
  }
  const handleCalculate =(e)=>{
    e.preventDefault()
    if (!Principle || !Rate || !Year) {
      alert('please fill the form')
    }
    else{
      /* alert('submited') */
      SetInterest(Principle*Rate*Year/100)
    }
  }
  const handleReset = (e)=>{
    SetInterest(0)
    SetPrinciple(0)
    SetRate(0)
    SetYear(0)
    SetIsPrinciple(true)
    SetIsRate(true)
    SetIsYear(true)
  }

  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
      <div style={{width:'500px'}} className='bg-light p-5 rounded'>
        <h1>Simple Interest App</h1>
        <p>Calculate your Simple Interest Easly</p>
        <div style={{height:'150px'}} className='flex-column mt-5 bg-warning d-flex justify-content-center align-items-center w-100 rounded'>
          <h1> ₹ {' '}{Interest}</h1>
          <p>Total Simple Interest </p>
        </div>
        <form className='mt-5' onSubmit={handleCalculate}>
          <div className='mb-3'>
          <TextField name='principle' className='w-100' value={Principle || ''} onChange={(e)=>validate(e)} id="outlined-basic" label="₹ Principle Amount" variant="outlined" />
          </div>
          {
            !isPrinciple && 
            <div>
              <p className='text-danger fw-bolder'>Invalid Input</p>
            </div>
          }
          <div className='mb-3'>
          <TextField className='w-100' name='rate' onChange={(e)=>validate(e)} value={Rate || ''}   id="outlined-basic" label="Rate of Interest (p.a) %" variant="outlined" />
          </div>
          {
            !isRate && 
            <div>
              <p className='text-danger fw-bolder'>Invalid Input</p>
            </div>
          }
          <div className='mb-3'>
          <TextField className='w-100' name='year' onChange={(e)=>validate(e)} value={Year || ''}  id="outlined-basic" label="Year (Yr)" variant="outlined" />
          </div>
          {
            !isYear && 
            <div>
              <p className='text-danger fw-bolder'>Invalid Input</p>
            </div>
          }
          <div className='mt-5'> 
            <Stack direction="row" spacing={2}>
                <Button type='submit' disabled={isPrinciple && isRate && isYear ?false:true} className='bg-success' style={{width:'200px',height:'50px'}} variant="contained">Calculate</Button>
                <Button onClick={handleReset} style={{width:'200px',height:'50px'}}  variant="outlined">Reset</Button>
            </Stack> 
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
