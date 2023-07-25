

window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            const container = document.getElementById("container");
            json = json.sort(function(b, a) {
                return a.hoursInSpace - b.hoursInSpace });
            for (let i=0; i<json.length; i++) {
                
            container.innerHTML += `
                
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[i].firstName + " " + json[i].lastName}</h3>
                                <ul>
                                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                                    <li id="active${i}">Active: ${json[i].active}</li>
                                    <li>Skills: ${json[i].skills}</li>
                                </ul>
                        </div>
                        <img class="avatar" img src=${json[i].picture}>
                    </div>
                    
            `;
            if(json[i].active == true) {
                const id = document.getElementById("active"+[i])
                id.style.color = "green";
            }};
           
        
        });
    });
            
});
