const day = 0;

switch(day) {
    case 0:
        console.log("Monday");
        break;
        
    case 1:
        console.log("Tuesday");
        break;

    case 2:
        console.log("Wednesday");
        break;

    case 3:
        console.log("Thursday");
        break;

    case 4:
        console.log("Friday");
        break;

    case 5:
        console.log("Saturday");
        break;

    case 6:
        console.log("Sunday");
        break;
        default: 
        throw new Error("Invalid day")
}