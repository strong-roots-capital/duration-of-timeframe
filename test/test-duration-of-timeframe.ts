import test from 'ava'

/**
 * Library under test
 */

import durationOfTimeframe from '../src/duration-of-timeframe'


const shouldReturnDurationOfTimeframe = (t: any, input: string, expected: string) => {
    t.is(expected, durationOfTimeframe(input))
}
shouldReturnDurationOfTimeframe.title = (_ = '', input: string, expected: string) => `should classify ${input} as duration of ${expected}`

const tests: string[][] = [
    ['minute', '5'],
    ['hour', '4H'],
    ['day', '3D'],
    ['week', '1W'],
    ['month', '6M']
]

tests.forEach(([expected, input]) => test(shouldReturnDurationOfTimeframe, input, expected))
