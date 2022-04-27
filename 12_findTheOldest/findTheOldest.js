// get the ages using map
// use reduce 

const findTheOldest = function(people) {
    return people.reduce((maxPerson, person) =>{
        return (getAge(person) > getAge(maxPerson)) ? person : maxPerson;
    }, people[0]);
};

const getAge = function(person){
        let startYear = person.yearOfBirth;
        let endYear = person.hasOwnProperty("yearOfDeath") ? person.yearOfDeath : (new Date()).getFullYear();
        return endYear - startYear;
}

// Do not edit below this line
module.exports = findTheOldest;
