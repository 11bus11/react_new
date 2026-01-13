import { useEffect, useState } from 'react'
import './App.css'
import secret from './secret'

function App() {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);

	//event class constructor
	class Event {
		constructor(course, context_code, title, description, location_name, start_at, end_at) {
			this.course = course;
			this.context_code = context_code;
			this.title = title;
			this.description = description;
			this.location_name = location_name;
			this.start_at = start_at;
			this.end_at = end_at;
		}
	}

	//getting data from TimeEdit
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

	//create array of Event objects (using data from TimeEdit)
	const eventsArray = [];
	let course_id = "";
	for (let i = 0; i < data.length; i++) {
		const reqEvent = new Event(data[i].columns[2], data[i].id, data[i].columns[0], data[i].columns[7], data[i].columns[1], data[i].startdate + "T" + data[i].starttime + ":00Z", data[i].enddate + "T" + data[i].endtime + ":00Z");
		eventsArray.push(reqEvent);
		if (i == 0) {
			course_id = data[0].columns[2];
		}
	}
	
	
	

  return (
    <>
    <h1>Calendar transfer</h1>
    <h2>Course: {course_id}</h2>
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
							<td>{eventsArray.title}</td>
							<td>{eventsArray.description}</td>
							<td>
								<div class="form-group">
                  <input type="comment" id={("input" + index)} class="form-control" placeholder="Comment"></input>
                  
              	</div>
							</td>
							<td>{eventsArray.location_name}</td>
							<td>{eventsArray.start_at}</td>
							<td>{eventsArray.end_at}</td>
						</tr>
								
									))}
               
        </tbody>
    </table>
    <button type="button" id="saveBtn" class="btn btn-primary" onClick={() => handle()}>send</button>
    </>
  )
  	//updating event objects and triggering the post request
	function handle() {
		for (let i = 0; i < eventsArray.length; i++) {
			let newComment = document.getElementById("input" + i).value;
			if (newComment == "") {
				break
			} else {
				eventsArray[i].description = (eventsArray[i].description + " Comment: " + newComment)
			}
			var jsonData = {
				"calendar_event": [
					{
					"context_code": "hrhrhr", 
					"title": eventsArray[i].title,
					"description": eventsArray[i].description,
					"location_name": eventsArray[i].location_name,
					"start_at": eventsArray[i].start_at,
					"end_at": eventsArray[i].end_at,
					}
				]
			}
		}
		postData(jsonData);
		
		alert("Sent! (in theory, not in practice)"); //confirmation that the function was run
	}

	//post request to canvas. Not currently working, but here to explain the concept
	async function postData(event) {
		return fetch('https://canvas.instructure.com/api/v1/calendar_events?access_token=$' + secret, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ event })
		})
		.then(data => data.json())
	}
}

export default App
