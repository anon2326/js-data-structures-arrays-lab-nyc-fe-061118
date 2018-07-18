// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(name){
  drivers.push(name);
  return drivers;
}
function destructivelyRemoveLastDriver(name){
  drivers.slice(-1);
  return drivers;
}
