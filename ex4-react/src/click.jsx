import eventsArray from "./misc";

function handleClick() {
    
    let newComment = document.getElementById("input0").innerHTML;
    eventsArray[index].description = (eventsArray[index].description + " Comment: " + newComment);
    alert(newComment); 
}

export default handleClick;