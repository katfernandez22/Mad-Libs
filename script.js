function madlibs() {
  let player = prompt("Would you like Story One or Story Two?", "storyOne or storyTwo");

  while (true) {
    if (!(player == "storyOne" || player == "storyTwo")) {
      player = prompt("Would you like Story One or Story Two?", "storyOne or storyTwo");
    }
    else break;
  }

  if(player == 'storyOne'){
      let prompt1 = prompt("type an adjective");
      let prompt2 = prompt("type a general place");
      let prompt3 = prompt("type a vehicle name (plural)");
      let prompt4 = prompt("type the name of a game");
      let prompt5 = prompt("type a plural noun");
      let prompt6 = prompt("type an 'ing' verb");
      let prompt7 = prompt("type another 'ing' verb");
      let prompt8 = prompt("type a food name (plural)");
      let prompt9 = prompt("type the name of a sport");
      let prompt10 = prompt("type another 'ing' verb");
      let prompt11 = prompt("type an emotion");
      let prompt12 = prompt("type a number");

      let message = `A vacation is when you take a trip to some ${prompt1} place near an amazing ${prompt2}. A good vacation place is one where you can ride ${prompt3} or play ${prompt4} or go hunting for ${prompt5}. I like to spend my time ${prompt6} or ${prompt7}. When parents go on a vacation, they spend their time eating three ${prompt8} a day. Usually, fathers play ${prompt9}, and mothers spend their time ${prompt10}. Adults need vacations more than kids because adults are always very ${prompt11} because they have to work ${prompt12} hours every day all year just to afford their vacations!`;
      alert(message);

  }

  if(player == 'storyTwo'){
    let prompt1 = prompt("type an adjective");
    let prompt2 = prompt("type a famous place");
    let prompt3 = prompt("type a plural noun");
    let prompt4 = prompt("type another adjective");
    let prompt5 = prompt("type a food (plural)");
    let prompt6 = prompt("type an emotion");
    let prompt7 = prompt("type an 'ing' verb");
    let prompt8 = prompt("type a common place");
    let prompt9 = prompt("type another adjective");
    let prompt10 = prompt("type a noun");
    let prompt11 = prompt("type another adjective");
    let prompt12 = prompt("type another noun");
    let prompt13 = prompt("type a family member");
    let prompt14 = prompt("type another adjective");

    let message = `Today we took a ${prompt1} fieldtrip to ${prompt2}. They're famous for making ${prompt3} and for cooking ${prompt4} ${prompt5}. Eating all that food made me feel ${prompt6}. Next we enjoyed the local tradition of ${prompt7} in the middle of the ${prompt8}! Finally, we went shopping for souvenirs. I bought a ${prompt9} ${prompt10} for myself, and a ${prompt11} ${prompt12} for my favorite ${prompt13}. I'll definitely never forget this ${prompt14} trip!`;
    alert(message);
  }
}



madlibs();
