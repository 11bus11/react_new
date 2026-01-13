import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import jsonToObject from './misc'
import GenerateTable from './table'
import handleClick from './click'


	
  	
	//document.getElementById("btn0").addEventListener(handleClick, alert(newComment);)


//useEffects for async

function App() {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	useEffect(() =>{
		async function getData() {
			try {
				const url = 'https://cloud.timeedit.net/ltu/web/schedule1/ri177XQQ760Z50Qv2Q093gZ6y6Y550276Y75Y.json';
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error('Did not work')
				}
				const body = await response.json();
				const items = (body['reservations']);
				setData(items);
			} catch (err) {
				setError(err.message);
				console.error(error);
			}
		};
		getData();
	}, [])
	console.log(data);

	function jsonToObject(jsonArray) {
		let objArray = [];
		for (let i = 0; i < jsonArray.length; i++) {
		  const reqEvent = new Event(jsonArray[i].id, jsonArray[i].columns[0], jsonArray[i].columns[7], jsonArray[i].columns[1], jsonArray[i].startdate + "T" + jsonArray[i].starttime + ":00Z", jsonArray[i].enddate + "T" + jsonArray[i].endtime + ":00Z");
		  objArray.push(reqEvent);
		}
		return objArray;
	  }
	const eventsArray = jsonToObject(data);
	

  return (
    <>
    <h1>Calendar transfer</h1>
    <h2>Course: </h2>
		<p>{String(data[0].id)}</p>
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
                  <button type="button" id={("btn" + index)} class="btn btn-primary" >send</button>
              	</div>
							</td>
							<td>event {eventsArray.location_name}</td>
							<td>event {eventsArray.start_at}</td>
							<td>event {eventsArray.end_at}</td>
						</tr>
								
									))}
               
        </tbody>
    </table>
    <button type="button" id="saveBtn" class="btn btn-primary" onClick={() => handle()}>send</button>
    </>
  )

	function handle() {
		for (let i = 0; i < eventsArray.length; i++) {
			let newComment = document.getElementById("input" + i).value;
			eventsArray[i].description = (eventsArray[i].description + " Comment: " + newComment)

		}
		
		
		alert(eventsArray[1].description);
	}
}

export default App
