   function checkSpeed() {
    const speed = Number(prompt("Input a number from 0-100"));
    const speedLimit = 70;
    const kmPerPoint = 5; //for every 5km, 1 demerit point is added
    
    if (speed <= speedLimit) {
        console.log("Ok");
    }
    //DRY
    else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint); //calculates demerit-points 
        if(points > 12) {
            console.log("License suspended");
    }
        else {
            console.log("Points: " + points);
        }
    }
}

checkSpeed();