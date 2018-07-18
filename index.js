// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(name){
  drivers.push(name);
  return drivers;
}
function destructivelyPrependDriver(name){
  drivers.unshift(name);
  return drivers;
}
function destructivelyRemoveLastDriver(){
  drivers.pop();
  return drivers;
}
function destructivelyRemoveFirstDriver(){
  drivers.shift();
  return drivers;
}
function appendDriver(name){
  newdriver = drivers.slice();
  newdriver.push(name);
  return newdriver;
}
function prependDriver(name){
  newdriver = drivers.slice();
  newdriver.unshift(name);
  return newdriver;
}
function removeLastDriver(){
  newdriver = drivers.slice();
  newdriver.pop();
  return newdriver;
}
function removeFirstDriver(){
  newdriver = drivers.slice();
  newdriver.shift();
  return newdriver;
}
