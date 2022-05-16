// Code your solution in this file!

const returnFirstTwoDrivers = function (names) {
    return names.slice(0,2)
}

const returnLastTwoDrivers = function (names) {
    return names.slice(names.length -2 , names.length )
}

let selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers]

const createFareMultiplier = n => {
    return function (fare) {
        return fare * n
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (names, twoDrivers) => twoDrivers(names);