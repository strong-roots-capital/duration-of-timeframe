/**
 * duration-of-timeframe
 * Resolve timeframe into corresponding momentjs duration
 */

import ow from 'ow'
import moment from 'moment'
import isTradingviewFormat, {
    inTradingviewFormat,
    isTradingviewFormatMonths,
    isTradingviewFormatWeeks,
    isTradingviewFormatDays,
    isTradingviewFormatHours,
    isTradingviewFormatMinutes
} from '@strong-roots-capital/is-tradingview-format'


/**
 * Return the duration (as a `moment.unitOfTime.Base`) of a timeframe
 * in Trading View format.
 *
 * @param timeframe - Timeframe of which to determine duration
 * @returns Duration of timeframe as `moment.unitOfTime.Base`
 */
export default function durationOfTimeframe(timeframe: string): moment.unitOfTime.Base {

    ow(timeframe, ow.string.is(inTradingviewFormat))

    const durationTranslations: [(s: string) => boolean, moment.unitOfTime.Base][] = [
        [isTradingviewFormatMinutes, 'minute'],
        [isTradingviewFormatHours, 'hour'],
        [isTradingviewFormatDays, 'day'],
        [isTradingviewFormatWeeks, 'week'],
        [isTradingviewFormatMonths, 'month']
    ]
    for (const [isTimeframe, duration] of durationTranslations) {
        if (isTimeframe(timeframe))
            return duration
    }

    throw new Error(`Unable to determine duration of timeframe '${timeframe}`)
}
