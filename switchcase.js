function checkDayOfWeek(dayNumber) {

    let day;
    switch (dayNumber) {
            case 0:
            day="Sunday";
            break;
            case 1:
            day="Monday";
            break;
            case 6:
            day="Sat";
            break;
    
        default:
            console.log("invalid output");
            break;
    }
    return day;
    
}
 console.log (checkDayOfWeek(0));