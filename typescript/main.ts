window.onload = function(){
    let getRandJokeBtn = <HTMLElement>document.querySelector("main > button");
    getRandJokeBtn.onclick = getRandomJoke;
}

/**
 * Gets a ransom joke from the ICNDB.com service
 */
function getRandomJoke(){
    //create request object
    let request = new XMLHttpRequest();

    //every time readystate is changed, this function is called 
    request.onreadystatechange = handleRequestChange;

    //prepare request
    let url = "http://api.icndb.com/jokes/random";
    request.open("GET", url); //get is essentially SELECT 

    //send request
    request.send();
}

/**
 * Fires every time the ready state property is changed. 
 * https://www.w3schools.com/js/js_ajax_http.asp
 */
function handleRequestChange(){
    let currRequest = <XMLHttpRequest>this;
    console.log("ReadyState: " + currRequest.readyState);
    console.log("Status: " + currRequest.status);

    //when processing is done and response/data is ready
    if(currRequest.readyState == 4 && 
       currRequest.status == 200){
        let response = JSON.parse(currRequest.responseText);
        alert(response.value.joke);
    }
}