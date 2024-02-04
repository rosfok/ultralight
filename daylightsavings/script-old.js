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
        displayRandomTextDuringDST();
    } else {
        displayRandomText();
    }

    // Function to check if Daylight Saving Time (DST) is in effect
    function isDST(date) {
        // Check if the date is between the second Sunday in March and the first Sunday in November
        var month = date.getMonth() + 1; // JavaScript months are 0-indexed
        var day = date.getDate();
        var dow = date.getDay(); // Day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
        return (month > 3 && month < 11) || (month === 3 && day > 7 && dow === 0) || (month === 11 && day < 7 && dow === 0);
    }

    // Function to get a random text
    function getRandomText() {
        var texts = [
            "The w✺rld needs y✺ur unique gifts, d✺n't leave with them still inside y✺u.",
            "Nature teaches us harm✺ny.",
            "Laughter is the same in all languages.",
            "Kn✺w that y✺u are a child ✺f the universe.",
            "The principal ingredient ✺f life is l✺ve.",
            "In the beginning is y✺u, in the middle is y✺u and in the end is y✺u.",
            "The heart sees deeper than the eye.",
            "Are n✺t fl✺wers the stars ✺f the earth?",
            "The universe is within y✺u. Bright and beautiful.",
            "Earth laughs in fl✺wers.",
            "Master the unkn✺wn by kn✺wing y✺ur deep self",
            "W✺rk but d✺n't f✺rget t✺ live.",
            "Even a j✺urney ✺f a th✺usand miles start with a first step.",
            "Empty y✺urself and let the universe fill y✺u.",
            "Live light, travel light, spread the light, be the light.",
            "With✺ut st✺rms and rain, life w✺uld cease t✺ be.",
            "Use y✺ur head t✺ live with y✺ur heart.",
            "All kn✺wledge is within y✺u.",
            "Kindess is the light ✺f life.",
            "Let y✺ur energy be used t✺ build, n✺t destr✺y.",
            "Y✺u must kn✺w that y✺u can swim thr✺ugh every change ✺f tide."
        ];
        var randomIndex = Math.floor(Math.random() * texts.length);
        return texts[randomIndex];
    }

    // Function to display random text
    function displayRandomText() {
        document.getElementById("randomText").innerText = getRandomText();
    }

    // Function to display different set of random text during DST
    function displayRandomTextDuringDST() {
        var textsDuringDST = [
            "Lorem Ipsum!",
            "Lorem Ipsum2!",
            "Lorem Ipsum3!"
        ];
        var randomIndex = Math.floor(Math.random() * textsDuringDST.length);
        document.getElementById("randomText").innerText = textsDuringDST[randomIndex];
    }

    // Update text on page refresh
    window.addEventListener('load', function() {
        if (isDST(new Date())) {
            displayRandomTextDuringDST();
        } else {
            displayRandomText();
        }
    });
