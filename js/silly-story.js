//hello world
// VARIABLE DECLARATIONS

/* STEP 1: Declare and initialize variables
- customName for the name field
- randomize for the button
- story for the paragraph that outputs the final story
*/
let customName = document.querySelector('manoz');
let randomize = document.querySelector('.randomize');
let story = document.querySelector('.story');


/// STEP 3: Create the variable that contains the story string to be modified
var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

// STEP 4: Create three arrays for the placeholders
var insertX = ['Donald Trump', 'Jackie Chan', 'Santa Claus'];
var insertY = ['Area 51', 'Death Valley', 'Aruba'];
var insertZ = ['spontaneously combusted', 'rapidly sublimated', 'evaporated instantly'];
// FUNCTIONS

// STEP 2: Function to return a random value from an array
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// STEP 6: Partially complete result() function
function result() {
    // STEP 7: Create a newStory variable that is a copy of storyText
    let newStory = storyText;

    // STEP 8: Generate random values from the arrays
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

	// STEP 9: Replace the placeholders in newStory with the random values
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':insertx:', xItem); // Replace :insertx: again for the second occurrence
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

    // STEP 10: Replace 'Bob' with the custom name if provided
    if (customName.value != '') {
        newStory = newStory.replace('Bob', customName.value);
    }
	// STEP 11: If the metric radio button is checked, convert the weight and temperature
    if (document.getElementById("metric").checked) {
        // Convert 300lbs to kg
        var weight = Math.round(300 * 0.453592);
        newStory = newStory.replace('300 pounds', weight + ' kilograms');

        // Convert 94°F to °C
        var temp = Math.round((94 - 32) * (5 / 9));
        newStory = newStory.replace('94 fahrenheit', temp + ' centigrade');
    }

    // STEP 13: Output the modified story to the story paragraph and make it visible
    story.textContent = newStory;
    story.style.visibility = 'visible';
}

// EVENT LISTENERS

// STEP 5: Add a click event listener to the randomize button to trigger the result() function
randomize.addEventListener('click', result);
