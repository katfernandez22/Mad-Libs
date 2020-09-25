var getStoryButton = document.querySelector("#getStory");
var resetButton = document.querySelector("#reset");
var getFormButton = document.querySelector("#getForm");
var chooseAgain = document.querySelector("#chooseAgain");

var selectStory = document.querySelector("#selectStory");
var storyForm = document.querySelector("#storyForm");
var finshedStory = document.querySelector("#finishedStory");

var inputs = document.querySelector("#storyForm div");

var chosenStory = document.querySelector("select");

var storyVisible = false;

var story = {
  storyOne: [
    [
      "Adjective:",
      "General Place:",
      "Vehicle name (plural):",
      "The Name of a Game:",
      "Plural Noun:",
      "An 'ing' Verb:",
      "Another 'ing' Verb:",
      "Food Name:",
      "Name of a Sport:",
      "Noun",
      "Another 'ing' Verb",
      "An emotion:",
      "Number",
    ],
    "#storyOneText",
    "#storyOne span"
  ],
  storyTwo: [
    [
      "Adjective:",
      "Famous Name:",
      "Plural Noun:",
      "Another Adjective:",
      "Food (plural):",
      "Emotion:",
      "An 'ing' Verb:",
      "Common Place:",
      "Another Adjective:",
      "Noun:",
      "Another Adjective:",
      "Another Noun:",
      "Family Member",
      "Another Adjective:",
    ],
    "#storyTwoText",
    "#storyTwo span"
  ],
};


getFormButton.addEventListener("click", function () {
  makeForm();

  selectStory.classList.add("hidden");
  storyForm.classList.remove("hidden");
});

chooseAgain.addEventListener("click", function () {
  selectStory.classList.remove("hidden");
  storyForm.classList.add("hidden");

  inputs.innerHTML = "";
});


getStoryButton.addEventListener("click", function () {
  storyVisible = true;

  makeStory();
  showHideStory();
});

resetButton.addEventListener("click", function () {
  storyVisible = false;

  showHideStory();

  inputs.innerHTML = "";
});


function makeForm() {
  var storyChoice = story[chosenStory.value][0];

  for (var i = 0; i < storyChoice.length; i++) {
    inputs.innerHTML += "<label>" + storyChoice[i] + '<br><input type="text"></label>';
  }
}

function makeStory() {
  var wordSlots = document.querySelectorAll(story[chosenStory.value][2]);
  var inputWords = document.querySelectorAll("input");


  for (var i = 0; i < wordSlots.length; i++) {
    wordSlots[i].textContent = inputWords[i].value;
  }
}

function showHideStory() {
  var storyText = document.querySelector(story[chosenStory.value][1]);

  if (storyVisible) {
    storyText.classList.remove("hidden");
    finishedStory.classList.remove("hidden");
    storyForm.classList.add("hidden");
  }
  else {
    storyText.classList.add("hidden");
    finishedStory.classList.add("hidden");
    selectStory.classList.remove("hidden");
  }
}