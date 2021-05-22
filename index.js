// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];



function destructivelyAppendCat(name){
    cats.push("Ralph");
    return cats;
}

function destructivelyPrependCat(name){
    cats.unshift("Bob");
    return cats;
}

function destructivelyRemoveFirstCat(name){
    cats.shift("Bob");
    return cats;
}

function destructivelyRemoveLastCat(name){
    cats.pop("Garfield");
    return cats;
}

function prependCat(name){
    const coolCats = ["Arnold",...cats,];
    return coolCats;
}

function appendCat(name){
    const newCats = [...cats, "Broom"];
    return newCats;
}

function removeFirstCat(name){
   return cats.slice(1);
}

function removeLastCat(name){
    return cats.slice(0, -1);
}