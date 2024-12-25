//* object assign(target, source) *//
let car = {
  name: "RushCar",
  type: "Mountain",
};
let part = {
  source: "stealth",
};
Object.assign(car, part);
console.log(car);
