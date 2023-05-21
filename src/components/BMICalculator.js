import React, { useState, useEffect } from 'react'

import '../index.css'

function BMICalculator(props) {

  // state
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')



  let calcBmi = (event) => {
    //prevent submitting
    event.preventDefault()

    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = (weight / (height * height))
      setBmi(bmi.toFixed(1))

      // Logic for message

      if (bmi < 25) {
        setMessage('You are underweight')
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are a healthy weight')
      } else {
        setMessage('You are overweight')
      }
    }
  }

  //  show image based on bmi calculation
  let imgSrc;

  if (bmi < 1) {
    imgSrc = null
  } else {
    if (bmi < 25) {
      imgSrc = require('../assets/underweight.png')
    } else if (bmi >= 25 && bmi < 30) {
      imgSrc = require('../assets/healthy.png')
    } else {
      imgSrc = require('../assets/overweight.png')
    }
  }


  let reload = () => {
    window.location.reload()
  }
  useEffect(() => {
    props.setProgress(100)
  }, [])

  return (
    <div className="app">
      <div className='container'>
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} placeholder='Enter your Weight' />
          </div>
          <div>
            <label>Height (m)</label>
            <input value={height} onChange={(event) => setHeight(event.target.value)} placeholder='Enter your Height' />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>
        </form>

        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>

        <div className='img-container'>
          <img src={imgSrc} alt=''></img>
        </div>
      </div>
    </div>
  );
}

export default BMICalculator;
