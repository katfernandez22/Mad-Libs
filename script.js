let getStoryButton = document.querySelector("#getStory");
let resetButton = document.querySelector("#reset");
let getFormButton = document.querySelector("#getForm");
let chooseAgain = document.querySelector("#chooseAgain");

let selectStory = document.querySelector("#selectStory");
let storyForm = document.querySelector("#storyForm");
let finshedStory = document.querySelector("#finishedStory");

let inputs = document.querySelector("#storyForm div");

let chosenStory = document.querySelector("select");

let storyVisible = false;

let story = {
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
  let storyChoice = story[chosenStory.value][0];

  for (let i = 0; i < storyChoice.length; i++) {
    inputs.innerHTML += "<label>" + storyChoice[i] + '<br><input type="text"></label>';
  }
}

function makeStory() {
  let wordSlots = document.querySelectorAll(story[chosenStory.value][2]);
  let inputWords = document.querySelectorAll("input");


  for (let i = 0; i < wordSlots.length; i++) {
    wordSlots[i].textContent = inputWords[i].value;
  }
}

function showHideStory() {
  let storyText = document.querySelector(story[chosenStory.value][1]);

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