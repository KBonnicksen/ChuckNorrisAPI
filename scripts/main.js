window.onload = function () {
    var getRandJokeBtn = document.querySelector("main > button");
    getRandJokeBtn.onclick = getRandomJoke;
};
function getRandomJoke() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = handleRequestChange;
    var url = "http://api.icndb.com/jokes/random";
    request.open("GET", url);
    request.send();
}
function handleRequestChange() {
    var currRequest = this;
    console.log("ReadyState: " + currRequest.readyState);
    console.log("Status: " + currRequest.status);
    if (currRequest.readyState == 4 &&
        currRequest.status == 200) {
        var response = JSON.parse(currRequest.responseText);
        alert(response.value.joke);
    }
}
