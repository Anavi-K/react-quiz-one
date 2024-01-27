import React, { Component } from 'react'
import '../App.css'

class QuizComponent extends Component {
  render() {
    return (
      <div className ='question'>
        <h1 className ='q'>Question</h1>
        <h5>1 of 15</h5>
        <h3>Which is the only mammal that can jump?</h3>
        <div className ='options'>
            <button className ='optionButton'>Dog</button>
            <button className ='optionButton'>Elephant</button>
            <button className ='optionButton'>Goat</button>
            <button className ='optionButton'>Lion</button>
        </div>
        <div className ='submit'>
            <button className ='submit1'>Previous</button>
            <button className ='submit2'>Next</button>
            <button className ='submit3'>Quit</button>
        </div>
      </div>
    )
  }
}
export default QuizComponent