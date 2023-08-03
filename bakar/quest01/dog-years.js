function dogYears(planet, ageInSeconds) {

    let orbitalPeriods = {
        earth: 1.0,
        mercury: 0.2408467,
        venus: 0.61519726,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturn: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132
    };

    let secondInEarthYears = 31557600

    let secondInYears = secondInEarthYears * orbitalPeriods[planet]

    let age = conversion(ageInSeconds, secondInYears)

    let realAge = age*7

    console.log(parseFloat(realAge.toFixed(2)))
}

function conversion(ageInSeconds, secondInYears) {
    return ageInSeconds / secondInYears
}

dogYears("earth", 1000000000)
