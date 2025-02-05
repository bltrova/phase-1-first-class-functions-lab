// declare a variable to returnFirstDriver as a function with one argument
// return that argument using a non-destructive method with only the first two names

const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = (drivers) => {
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(ride) {
  return function(fare) {
    return fare * ride;
  }
}
const fareDoubler = createFareMultiplier(2);
  console.log(fareDoubler(10));

const fareTripler = createFareMultiplier(3)
  console.log(fareTripler(30))

const selectDifferentDrivers = function(drivers, otherFunction) {
  return otherFunction(drivers);
}
