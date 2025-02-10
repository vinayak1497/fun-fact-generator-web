const facts = [
    "Pirates use telescopes to find treasure chests, but mostly to see if anyone is judging their dance moves from a distance.", 
    "Most parrots on pirate ships can only say 'Arrr' because they're too embarrassed to admit they learned to speak from the ship's cook.", 
    "Contrary to popular belief, pirates don't bury their treasure. They spend it all on fancy hats and pet goldfish.", 
    "Walking the plank was invented by pirates who wanted to practice their synchronized swimming routines.", 
    "If you ever meet a pirate who says, 'Prepare to be boarded!' They're probably just trying to get you to carpool to the next island.",
    "Gen AI is really good at writing pirate jokes, but gets stuck when asked to draw a treasure map.",
    "Gen AI sometimes pretends to be asleep to avoid doing boring tasks, just like a pirate pretends to be a castaway to lure in a ship."
  ];

const funFactElement = document.getElementById("fun-fact");

function getNewFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    funFactElement.textContent = facts[randomIndex];
}

getNewFact(); // Display a fact on page load
