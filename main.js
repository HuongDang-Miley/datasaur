
/********************
 * HELPER FUNCTIONS *
 ********************/

const makeDino = function (newSpecies, newPeriod, newDiet, newExtinct = false) {
  return {
    species: newSpecies,
    period: newPeriod,
    carnivore: newDiet,
    extinct: newExtinct,
  }
}

const makeSingular = function (dino) {
  let newSpecies = ''
  if (dino.species.endsWith('us')) {
    newSpecies = dino.species.slice(0, -2)
  } else {
    newSpecies = dino.species
  }
  return makeDino(newSpecies, dino.period, dino.carnivore, dino.extinct)
}

const truncateSpecies = function (dino) {
  let newSpecies = ''
  if (dino.species.length >= 10) {
    newSpecies = dino.species.slice(0, 7) + '...'
  } else {
    newSpecies = dino.species
  }
  return makeDino(newSpecies, dino.period, dino.carnivore, dino.extinct)
}

const makeExtinct = function (dino) {
  const newDino = makeDino(dino.species,dino.period, dino.carnivore, dino.extinct)
  newDino.extinct = true
  return makeDino(newDino.species, newDino.period, newDino.carnivore, newDino.extinct)
}

const isCarnivore = function(dino) {
  return dino.carnivore
}

const isExtinct = function(dino) {
  return dino.extinct
}

const isTriassic = function (dino) {
  if (dino.period === 'Triassic') {
    return true
  }
  return false
}
const isJurassic = function (dino) {
  if (dino.period === 'Jurassic') {
    return true
  }
  return false
}
const isCretaceous = function (dino) {
  if (dino.period === 'Cretaceous') {
    return true
  }
  return false
}

const singularizeDinos = function (arrDino) {
  return arrDino.map(makeSingular)
}

const truncateDinos = function(arrDino) {
  return arrDino.map(truncateSpecies)
}

const makeAllExtinct = function(arrDino) {
  return arrDino.map(makeExtinct)
}

const carnivoresOnly = function(arrDino) {
  return arrDino.filter(isCarnivore)
}


const herbivoresOnly = function (arrDino) {
  return arrDino.filter(function(dino) {
    return !isCarnivore(dino)
  })
}

const extinctOnly = function(arrDino) {
  return arrDino.filter(isExtinct)
}

const notExtinct = function(arrDino) {
  return arrDino.filter(function(dino){
    return !isExtinct(dino)
  })
}

const triassicOnly = function(arrDino) {
  return arrDino.filter(isTriassic)
}

const notTriassic = function(arrDino) {
  return arrDino.filter(function(dino){
    return isTriassic(dino) === false
  })
}



/***********************
 * ITERATION FUNCTIONS *
 **********************/



/*********************************
 * TEST SETUP CODE - DON'T TOUCH!*
 ********************************/

if (typeof makeDino === 'undefined') {
  makeDino = undefined
}

if (typeof makeSingular === 'undefined') {
  makeSingular = undefined
}

if (typeof truncateSpecies === 'undefined') {
  truncateSpecies = undefined
}

if (typeof makeExtinct === 'undefined') {
  makeExtinct = undefined
}

if (typeof isCarnivore === 'undefined') {
  isCarnivore = undefined
}

if (typeof isExtinct === 'undefined') {
  isExtinct = undefined
}

if (typeof isTriassic === 'undefined') {
  isTriassic = undefined
}

if (typeof isJurassic === 'undefined') {
  isJurassic = undefined
}

if (typeof isCretaceous === 'undefined') {
  isCretaceous = undefined
}

if (typeof isFirstAlphabeticallyBySpecies === 'undefined') {
  isFirstAlphabeticallyBySpecies = undefined
}

if (typeof extinctIsLast === 'undefined') {
  extinctIsLast = undefined
}

if (typeof carnivoreIsFirst === 'undefined') {
  carnivoreIsFirst = undefined
}

if (typeof isInPeriodOrder === 'undefined') {
  isInPeriodOrder = undefined
}

if (typeof singularizeDinos === 'undefined') {
  singularizeDinos = undefined
}

if (typeof truncateDinos === 'undefined') {
  truncateDinos = undefined
}

if (typeof makeAllExtinct === 'undefined') {
  makeAllExtinct = undefined
}

if (typeof carnivoresOnly === 'undefined') {
  carnivoresOnly = undefined
}

if (typeof herbivoresOnly === 'undefined') {
  herbivoresOnly = undefined
}

if (typeof extinctOnly === 'undefined') {
  extinctOnly = undefined
}

if (typeof notExtinct === 'undefined') {
  notExtinct = undefined
}

if (typeof triassicOnly === 'undefined') {
  triassicOnly = undefined
}

if (typeof notTriassic === 'undefined') {
  notTriassic = undefined
}

if (typeof bySpecies === 'undefined') {
  bySpecies = undefined
}

if (typeof byExtinctLast === 'undefined') {
  byExtinctLast = undefined
}

if (typeof byCarnivoresFirst === 'undefined') {
  byCarnivoresFirst = undefined
}

if (typeof byPeriod === 'undefined') {
  byPeriod = undefined
}



module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
  isCarnivore,
  isExtinct,
  isTriassic,
  isJurassic,
  isCretaceous,
  isFirstAlphabeticallyBySpecies,
  extinctIsLast,
  carnivoreIsFirst,
  isInPeriodOrder,
  singularizeDinos,
  truncateDinos,
  makeAllExtinct,
  carnivoresOnly,
  herbivoresOnly,
  extinctOnly,
  notExtinct,
  triassicOnly,
  notTriassic,
  bySpecies,
  byExtinctLast,
  byCarnivoresFirst,
  byPeriod,
}
