import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import eventsArray from './misc'
import GenerateTable from './table'
import handleClick from './click'


function App() {
  const [count, setCount] = useState(0)




	//document.getElementById("btn0").addEventListener(handleClick, alert(newComment);)

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
					{eventsArray.map((eventsArray, index) => (
						<tr key={index}>
							<td>{(index+1)}</td>
							<td>event {eventsArray.title}</td>
							<td>event {eventsArray.description}</td>
							<td>
								<div class="form-group">
                  <input type="comment" id={("input" + index)} class="form-control" placeholder="Comment"></input>
                  <button type="button" id={("btn" + index)} class="btn btn-primary" onClick={() => handle()}>send</button>
              	</div>
							</td>
							<td>event {eventsArray.location_name}</td>
							<td>event {eventsArray.start_at}</td>
							<td>event {eventsArray.end_at}</td>
						</tr>
								
									))}
               
        </tbody>
    </table>
    <button type="button" id="saveBtn" class="btn btn-primary" >send</button>
    </>
  )

	function handle() {
		for (let i = 0; i < eventsArray.length; i++) {
			let newComment = document.getElementById("input" + i).value;
			eventsArray[i].description = (eventsArray[i].description + " Comment: " + newComment)

		}
		
		
		alert(eventsArray[0].description);
	}
}

export default App
