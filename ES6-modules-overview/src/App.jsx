import { useEffect, useState } from 'react'
import './App.css'
import watch from './Components/Watch/Watch'
import './App.css'
import Watch from './Components/Watch/Watch'

function App() {
 const [watches, setWatches] = useState([]);

 useEffect(()=>{
  fetch('watches.json')
  .then(res=> res.json())
  .then(data => setWatches(data))
 },[])

  // const watches = [
  // {id:1, name:"Apple Watch", price: 200},
  // {id:2, name:"samsung Watch", price: 200},
  // {id:3, name:"MI Watch", price: 200}
  // ]


// const watches = [
//   {
//       "id": 1,
//       "name": "Apple Watch Series 6",
//       "price": 399.99
//   },
//   {
//       "id": 2,
//       "name": "Samsung Galaxy Watch 4",
//       "price": 249.99
//   },
//   {
//       "id": 3,
//       "name": "Garmin Forerunner 945",
//       "price": 599.99
//   },
//   {
//       "id": 4,
//       "name": "Fitbit Versa 3",
//       "price": 229.95
//   },
//   {
//       "id": 5,
//       "name": "Fossil Gen 5 Carlyle",
//       "price": 295.00
//   }
// ]

  return (
    <>
      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}
export default App
