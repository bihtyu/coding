const { SortTest } = require('./test.js')
const randomRang = [1, 10000 * 1]
const arrTotal = 10000 * 1

const { sort_api } = require('./func/sort_api')
const { sort_bubble } = require('./func/sort_bubble')
const { sort_selection } = require('./func/sort_selection')
const { sort_quick_in_place, sort_quick_recursion } = require('./func/sort_quick')

// test
const sortFns = [sort_api, sort_quick_in_place]
const myTest = new SortTest(sortFns, randomRang, arrTotal)

myTest.start()
