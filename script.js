const facts = [
    "A shrimp's heart is in its head.",
    "It is physically impossible for pigs to look up into the sky.",
    "The \"sixth sick sheik's sixth sheep's sick\" is believed to be the toughest tongue twister in the English language.",
    "If you sneeze too hard, you can fracture a rib.",
    "Wearing headphones for just an hour could increase the bacteria in your ear by 700 times.",
    "In the course of an average lifetime, while sleeping you will eat around 70 assorted insects and 10 spiders.",
    "Like fingerprints, everyone's tongue print is different.",
    "It is impossible for most people to lick their own elbow.",
    "A crocodile cannot stick its tongue out.",
    "Over 75% of people who read this will try to lick their elbow."
];

const funFactElement = document.getElementById("fun-fact");

function getNewFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    funFactElement.textContent = facts[randomIndex];
}

getNewFact(); // Display a fact on page load
