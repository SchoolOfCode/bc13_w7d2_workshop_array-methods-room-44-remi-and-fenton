let animals = [
  "baboon",
  "kangaroo",
  "rhino",
  "frog",
  "beaver",
  "horse",
  "basalisk",
];

let bListAnimals = animals.filter(bAnimals);

function bAnimals(animal) {
  return animal[0] === "b";
}
