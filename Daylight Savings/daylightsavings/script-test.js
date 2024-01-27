document.addEventListener("DOMContentLoaded", function() {

    console.log('hi');

    // Get the current date and time in New York (Eastern Time Zone)
    var currentDate = new Date();
    var newYorkOffset = -5; // Standard Time (Eastern Time Zone)

    console.log(currentDate);

    // Check if Daylight Saving Time (DST) is in effect
    if (isDST(currentDate)) {
        newYorkOffset = -4; // Eastern Daylight Time (EDT)
        document.body.style.backgroundImage = "radial-gradient(ellipse at top left, sandybrown, PaleTurquoise, deepskyblue)";
        
    } else {
        
    }

    // Function to check if Daylight Saving Time (DST) is in effect
    function isDST(date) {
        // Check if the date is between the second Sunday in March and the first Sunday in November
        var month = date.getMonth() + 1; // JavaScript months are 0-indexed
        var day = date.getDate();
        var dow = date.getDay(); // Day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
        return (month > 3 && month < 11) || (month === 3 && day > 7 && dow === 0) || (month === 11 && day < 7 && dow === 0);
    }

    

});