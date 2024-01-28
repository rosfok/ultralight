window.onload = function() {

  // Function to check if the current date is in daylight savings time
  function isDaylightSavingsTime() {
    const today = new Date();
    const januaryOffset = new Date(today.getFullYear(), 0, 1).getTimezoneOffset();
    const currentOffset = today.getTimezoneOffset();
    return januaryOffset !== currentOffset;
  }

  // Function to display random text in a specified div
  function displayRandomText(divId, textArray) {
    const div = document.getElementById(divId);
    const randomIndex = Math.floor(Math.random() * textArray.length);
    div.innerText = textArray[randomIndex];
    div.style.display = "block";
  }

  var random_text_dst = [
    "G✺ne hiking.",
    "G✺ne walking in the neighb✺rhood.",
    "G✺ne t✺ the park t✺ play fetch with Hiccup.",
    "G✺ne l✺✺king f✺r fl✺wers.",
    "G✺ne snacking.",
    "G✺ne pe✺ple watching.",
    "G✺ne t✺ get an iced matcha.",
    "G✺ne t✺ s✺me✺ne else's h✺use.",
    "G✺ne.",
  ];

  var random_text_not_dst = [
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
    // ... (other texts)
  ];

  // Check if it is daylight savings time and display random text accordingly
  if (isDaylightSavingsTime()) {
    displayRandomText("dst", random_text_dst);
    // Add class to the body for daylight savings time
    document.body.classList.add("daylight-savings");
  } else {
    displayRandomText("not-dst", random_text_not_dst);
    // Add class to the body for non-daylight savings time
    document.body.classList.add("not-daylight-savings");
  }

};
