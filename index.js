const returnFirstTwoDrivers = function(array) {
    let driver1 = array[0];
    let driver2 = array[1];
    let firstDrivers = [driver1, driver2];
    return firstDrivers;
}

const returnLastTwoDrivers = function(array) {
    let last1 = array[2];
    let last2 = array[3];
    let lastDrivers = [last1, last2];
    return lastDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(int) {
    return function(fare) {
        return fare * int;
    }
}
//this is a function
// function test(){}
// //this is a function
// const test2 = () => {
// const test3 = createFareMultiplier(2)
// const test4 = function(fare){ return 2 * fare}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(arrayOfDrivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayOfDrivers);
}
