var _ = require('lodash-node');

console.time("fb");

var people = [
  {
    "name": "Dave",
    "born": 1945,
    "died": 1982
  },
  {
    "name": "Chad",
    "born": 1985,
    "died": 1998
  },
  {
    "name": "Ross",
    "born": 1901,
    "died": 1999
  },
  {
    "name": "Scott",
    "born": 1905,
    "died": 1945
  },
  {
    "name": "Jeff",
    "born": 1985,
    "died": 2014
  }
];

var min = _.min(people, function(person){
  return person.born
}).born;

var max = _.max(people, function(person){
  return person.died
}).died;

var years = _.range(min, max);

function isAlive(person, year) {
    return person.born <= year && person.died >= year;
}

var tallys = _.map(years, function(year){
  return { "year": year, "alive": people.filter(function(person) {
    return isAlive(person, year)
  }).length }                                               
});

var answer = _.reduce(tallys, function(challenger, champion) {
  if (champion.alive > challenger.alive) {
    return champion;
  }
  return challenger;
});

console.log(answer);

console.timeEnd("fb");
