import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './Bookstore'

function App() {
  
  const actors =["sakib",'shariful raj','jasim','rubel']
  const singer =[
    {id:1 ,name: "Mahfuz", age: 68},
    {id:2 ,name: "Eva", age: 38},
    {id:3 ,name: "Suvro", age: 58},
    {id:4 ,name: "Pritam", age: 28}
  ]
  return (
    <>
<h1>Vite + React</h1>

{
  singer.map(singer => <Singer singer={singer}></Singer>)
}


<Actor name={"Bappa Raz"}></Actor>
{
  actors.map(actor =><Actor name={actor}></Actor>)
}


{/* <Todo task="Learn React" isDone={true}></Todo>
<Todo task="Core Concepts" isDone={false}></Todo>
<Todo task="Try JSX" isDone={true}></Todo> */}
{/* <Device name='laptop' price='55'></Device>
<Device name='mobile' price='17'></Device>
<Device name='watch' price='3'></Device>
<Person></Person>
<Person></Person>
<Student grade="7" score="99"></Student>
<Student grade={12} score={85}></Student>
<Student></Student>
<Developer></Developer> */}
</>
)
}

function Device(props){
// console.log(props)
  return <h2>This Device: {props.name} Price: {props.price}</h2>
}

function Person(){
const age = 20
return <h3>I am a person with age: {age}</h3>
}

// const {grade, score} = {grade: '7', score: '99'};

function Student({grade=1,score=0}){
  console.log(grade,score);
return (
<div className='student'>
<h3>This is a student</h3>
<p>Class: {grade}</p>
<p>Score: {score}</p>
</div>
)
}

function Developer(){
  const developerStyle = {
    margin:"20px",
    padding: '20px',
    border: "2px solid purple",
    borderRadius: '20px'
  }
  return (
    <div style={developerStyle}>
      <h5>Dev Dev</h5>
      <p>Coding:</p>
    </div>
  )
}

export default App
