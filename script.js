

window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
        response.json().then(function(json) {
            const container = document.getElementById("container");
        });
    });
});