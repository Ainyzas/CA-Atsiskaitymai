/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }
    wasExpensive() {
        return this.budget > 100_000_000 ? true : false;
    }
}

const movie1 = new Movie("Spider-Man 3", "Sam Raimi", 258_000_000);
console.log(movie1);
console.log(movie1.wasExpensive());

const movie2 = new Movie("The Blair Witch Project", "Daniel Myrick", 600_000);
console.log(movie2);
console.log(movie2.wasExpensive());
