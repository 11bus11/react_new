import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import eventsArray from './misc'
import generateTable from './table'


function App() {
  const [count, setCount] = useState(0)



  return (
    <>
    <h1>Calendar transfer</h1>
    <h2>Course: D0031N</h2>
		<p>{eventsArray[0].location_name}</p>
    <table class="table">
        <thead>
            <tr>
                <th scope="col" class="col-1">#</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col" class="col-3">Comment</th>
                <th scope="col">Location</th>
                <th scope="col">Start</th>
                <th scope="col">End</th>
            </tr>
        </thead>
        <tbody>
        	{generateTable(eventsArray)}
        </tbody>
    </table>
    <button type="button" id="saveBtn" class="btn btn-primary" >send</button>
    </>
  )
}

export default App
