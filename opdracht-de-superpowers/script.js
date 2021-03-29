const superheroes = [
    {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
    },
    {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
    },
    {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
    },
    {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
    },
    {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
    },
    {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
    },
    {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
    },
    {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
    },
    {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
    },
    {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
    },
    {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
    },
    {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
    },
    {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
    },
    {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
    },
    {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
    }
    ]

// Opdracht 1: Maak een array van alle superhelden namen 
const superheroesNames = superheroes.map(element => {
       return element.name;
});
console.log(superheroesNames);

// Opdracht 2: Maak een array van alle "lichte" superhelden (<190 pounds)
const superheroesWeight = superheroes.filter(element => {
    return element.weight < 190;
});
console.log(superheroesWeight);

// Opdracht 3: Maak een array van de namen van de superhelden die 200 pounds wegen 
const superheroesBig = superheroes.filter(element => {
    return element.weight >200;
    }).map (element => {
        return element.name;
});
console.log(superheroesBig);

// Opdracht 4: Maak een array met alle comics waar de superhelden hun first apperances hebben gehad. 
const superheroesAppearances = superheroes.map(element => {
    return element.first_appearance;
});
console.log(superheroesAppearances);

// Opdracht 5: Maak een array met alle superhlden van DC comics. Maak daarna een array met alle superhelden van Marvel Comics. 
const superheroesDcComics = superheroes.filter(element => {
    return element.publisher === "DC Comics";
});
console.log(superheroesDcComics);

const superheroesMarvelComics = superheroes.filter(element => {
    return element.publisher === "Marvel Comics";
});
console.log(superheroesMarvelComics);

// Opdracht 6: Tel het gewicht van alle superhelden van DC Comics bij elkaar op.
const superheroesWeight2 = superheroesDcComics.map(element => {
    if (element.weight !== "unknown") {
        return parseInt(element.weight, 10);
    } else { 
        return 0; 
    }
});
const superheroesTotalWeight = superheroesWeight2.reduce((weight1, weight2) => {
    return weight1 + weight2;
});
console.log("TotalWeight Superheroes DC Comics:", superheroesWeight2, superheroesTotalWeight);

// Opdracht 7: Tel het gewicht van alle superhelden van Marvel Comics bij elkaar op.
const totalWeightMarvelComics =  superheroesMarvelComics.map (element => {
    return element.weight !== "unknown" ? parseInt(element.weight, 10) : 0;
  })
  .reduce((weight1, weight2) => weight1 + weight2, 0);
  
console.log("TotalWeight  Superheroes Marvel Comics:", totalWeightMarvelComics);

// Opdracht 8: Zoek de zwaarste superheld!

const heroes = superheroes.map (element =>{
    const weightHeroes = element.weight !== "unknown" ? parseInt(element.weight): 0;
    element.weight = weightHeroes; 
    return element; 
});

const BiggestSuperhero = heroes.reduce (
    (currentBiggestSuperhero, currentSuperhero) => {
        if (currentSuperhero.weight > currentBiggestSuperhero.weight) {
            return currentSuperhero;
        } else {
            return currentBiggestSuperhero;
        }
    },
    heroes[0]
);
console.log("Biggeste Superhero", BiggestSuperhero);