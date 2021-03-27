// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {

    const takeoff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const background = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const rocket = document.getElementById("rocket");
    const upButton = document.getElementById('up');
    const downButton = document.getElementById('down');
    const leftButton = document.getElementById('left');
    const rightButton = document.getElementById('right');

    const rocketTop = rocket.offsetTop;  // Get rocket start position
    const rocketLeft = rocket.offsetLeft;


    takeoff.addEventListener("click", function (event) {
        //console.log("takeoff");
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response){
           flightStatus.innerHTML = "Shuttle in Flight.";
           background.style.background= "blue";
           let height = Number(spaceShuttleHeight.innerHTML);
           height  += 10000;
           spaceShuttleHeight.innerHTML = String(height);
        }
    });
    
    landing.addEventListener("click", function (event) {
        //console.log("landing");
        window.alert("The shuttle is landing. Landing gear engaged.");
           flightStatus.innerHTML = "The shuttle has landed.";
           background.style.background= "green";
           spaceShuttleHeight.innerHTML = 0;
           rocket.style.top= rocketTop + "px";
           rocket.style.left= rocketLeft + "px";
        }
    );

    missionAbort.addEventListener("click", function (event) {
        //console.log("missionAbort");
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response){
           flightStatus.innerHTML = "Mission aborted.";
           background.style.background= "green";
           spaceShuttleHeight.innerHTML = 0;
           rocket.style.top= rocketTop + "px";
           rocket.style.left= rocketLeft + "px";
           
        }
    });

    upButton.addEventListener("click", function (event) {
        //console.log("UP");
        move_img("up", rocket);
    });
    
    
    downButton.addEventListener("click", function (event) {
        move_img("down", rocket);
    });

    leftButton.addEventListener("click", function (event) {
        move_img("left", rocket);
    });

    rightButton.addEventListener("click", function (event) {
        move_img("right", rocket);
    });

   
    //onsole.log("ZZZ",background.offsetTop);
    // console.log("oLeft",background.offsetLeft);
    
    // console.log("oHeight",background.offsetHeight);

function move_img(str, img) {
    let step=10;
    let x = 0;
    let y =0;
   
    switch(str){

    case "down":
    x = img.offsetTop;
    x += step;
    if (x > 250) {x = 250};
    img.style.top= x + "px";
    console.log("down posn", x);
    break;
    
    case "up":
    x = img.offsetTop;
    x -= step;
    if (x < 0) {x = 0};
    img.style.top= x + "px";
    console.log("up posn", x);
    break;
    
    case "left":
    y = img.offsetLeft;
    y -= step;
    if (y < -21) {y = -21};
    img.style.left= y + "px";
    console.log("left posn", y);
    break;
    
    case "right":
    y = img.offsetLeft;
    y += step;
    if (y > 399) {y = 399};
    img.style.left= y + "px";
    console.log("right posn", y);
    break;
    }
    }


}

window.addEventListener("load", init);

